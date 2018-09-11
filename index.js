'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const on = (node, adapter, [eventType, callback]) => {
  const target = adapter.toNode(node);
  target.addEventListener(eventType, callback);
  return () => target.removeEventListener(eventType, callback);
};

const off = (node, adapter, [eventType, callback]) => {
  adapter.toNode(node).removeEventListener(eventType, callback);
};

const emmit = (node, adapter, [event]) => {
  adapter.toNode(node).dispatchEvent(event instanceof Event ? event : new Event(String(event)));
};

var event = {
  on,
  off,
  emmit
};

const name = (node, adapter) => adapter.getName(node);

const text = (node, adapter) => adapter.toNode(node).innerText;

const attributes = (node, adapter) => adapter.toNode(node).attributes;

const attribute = (node, adapter, args) => {
  const [name] = args;
  const target = adapter.toNode(node);

  if (args.length === 2) {
    const [value] = args;

    if (value === undefined) {
      target.removeAttribute(name);
    } else {
      target.setAttribute(name, value);
    }
  }

  return target.getAttribute(name);
};

const parent = (node, adapter) => adapter.getParentNode(node);

const root = (node, adapter) => adapter.getRootNode(node);

const query = (node, adapter, [queryString], utils) => {
  const result = adapter.toNode(node).querySelector(queryString);
  return utils.wrap(adapter.isNode(result) ? result : [], adapter);
};

const queryAll = (node, adapter, [queryString], utils) => {
  const result = adapter.toNode(node).querySelectorAll(queryString);
  return utils.wrap(result, adapter);
};

var element = {
  name,
  text,
  attributes,
  attribute,
  parent,
  root,
  query,
  queryAll
};

exports.eventAugmentations = event;
exports.elementAugmentations = element;
//# sourceMappingURL=index.js.map
