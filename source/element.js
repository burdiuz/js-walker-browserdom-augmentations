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

export default {
  name,
  text,
  attributes,
  attribute,
  parent,
  root,
  query,
  queryAll,
};
