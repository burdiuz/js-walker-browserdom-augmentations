'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const on = (node, adapter, [eventType, callback]) => {
  node = adapter.toNode(node);
  node.addEventListener(eventType, callback);
  return () => node.removeEventListener(eventType, callback);
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

const text = (node, adapter) => adapter.getText(node);

const attributes = (node, adapter) => adapter.getAttributes(node);

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
  query,
  queryAll
};

exports.eventAugmentations = event;
exports.elementAugmentations = element;
//# sourceMappingURL=index.js.map
