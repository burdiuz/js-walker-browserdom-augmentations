const on = (node, adapter, [eventType, callback]) => {
  const target = adapter.toNode(node);
  target.addEventListener(eventType, callback);
  return () => target.removeEventListener(eventType, callback);
};

const off = (node, adapter, [eventType, callback]) => {
  adapter
    .toNode(node)
    .removeEventListener(eventType, callback);
};

const emmit = (node, adapter, [event]) => {
  adapter
    .toNode(node)
    .dispatchEvent(event instanceof Event ? event : new Event(String(event)));
};

export default {
  on,
  off,
  emmit,
};
