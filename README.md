
# TreeWalker Browser DOM Augmentations

[TreeWalker](https://github.com/burdiuz/js-tree-walker) augmentations for DOM Nodes. It's used in DOMWalker library to add to TreeWalker HTML Element-specific funcitons, like adding event listeners or getting attributes.

### API
* **name():String** -- retrieve [Node.nodeName](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName)
* **text():String** -- retrieve [Node.innerText](https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText)
* **attributes():[NamedNodeMap](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap)** -- retrieve [Element.attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)
* **attribute(name:String, value:?any):any** -- get attribute by name, if second arguemtn passed, will set it as attribute value, if second arguemtn is `undefined`, will remove attribute.
* **parent():Node** -- returns parent node
* **root():Node** -- return root node of DOM tree
* **query(selector:String):Node** -- equivalent to [Element.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
* **queryAll(selector:String):NodeList** -- equivalent to [Element.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)

* **on(eventType:String, listener:Function):Function** -- add event lsitener, returns callback that will remove event listner once called.
* **off(eventType:String, listener:Function)** -- remove event listener.
* **emmit(event:Event|String)** -- dispatch Event, if string passed, will create Event of this type.

### DEMO
* Browser DOM Augmentations added to [TreeWalker demo](https://jsfiddle.net/actualwave/p1k4wjy2/)
* [DOMWalker demo](https://jsfiddle.net/actualwave/98p2750y/)
