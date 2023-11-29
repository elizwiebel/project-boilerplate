((): void => {
    // JS DOM MANIPULATION METHODS

    // In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.
    const div: HTMLDivElement = document.createElement("div");

    // The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
    const element: HTMLElement = document.querySelector(".element")!;

    // The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.const element = document.
    const elements: NodeListOf<Element> = document.querySelectorAll(".element")!;

    // The getElementById() method of the Document interface returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
    const elementByID: HTMLElement = document.getElementById("element")!;

    // The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s). This is a live HTMLCollection. Changes in the DOM will reflect in the array as the changes occur. If an element selected by this array no longer qualifies for the selector, it will automatically be removed. Be aware of this for iteration purposes.
    const elementsByClassName: HTMLCollectionOf<Element> = document.getElementsByClassName("element")!;

    // The innerText property of the HTMLElement interface represents the rendered text content of a node and its descendants.
    element.innerText = "Hello World";

    // The textContent property of the Node interface represents the text content of the node and its descendants.
    element.textContent = "Hello World";

    // The Element property innerHTML gets or sets the HTML or XML markup contained within the element. This is a security risk if the string to be inserted might contain potentially malicious content.
    element.innerHTML = "Hello World";

    // The Element.append() method inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes.
    element.append("Hello World");

    // The Element.prepend() method inserts a set of Node objects or string objects before the first child of the Element. String objects are inserted as equivalent Text nodes.
    element.prepend("Hello World");

    // The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.
    element.appendChild(div);

    // The Element.before() method inserts a set of Node or string objects in the children list of this Element's parent, just before this Element. String objects are inserted as equivalent Text nodes.
    element.before("Hello World");

    // The Element.remove() method removes the element from the DOM.
    element.remove();

    // The read-only children property returns a live HTMLCollection which contains all of the child elements of the element upon which it was called.
    element.children;

    // The read-only parentElement property of Node interface returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM Element.
    element.parentElement;

    // The closest() method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.
    element.closest("parentElement");

    // The Element.nextElementSibling read-only property returns the element immediately following the specified one in its parent's children list, or null if the specified element is the last one in the list.
    element.nextElementSibling;

    // The Element.previousElementSibling read-only property returns the Element immediately prior to the specified one in its parent's children list, or null if the specified element is the first one in the list.
    element.previousElementSibling;

    // The getAttribute() method of the Element interface returns the value of a specified attribute on the element.
    element.getAttribute("title");

    // Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.
    element.setAttribute("title", "New Title");

    // The Element method removeAttribute() removes the attribute with the specified name from the element.
    element.removeAttribute("title");

    // The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements. It exposes a map of strings (DOMStringMap) with an entry for each data-* attribute.
    element.dataset.fullName = "First Last";

    // To remove an attribute, you can use the delete operator: delete element.dataset.keyname.
    delete element.dataset.fullName;

    // The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list
    element.classList;

    // The add() method of the DOMTokenList interface adds the given tokens to the list, omitting any that are already present.
    element.classList.add("class");

    // The remove() method of the DOMTokenList interface removes the specified tokens from the list.
    element.classList.remove("class");

    // The replace() method of the DOMTokenList interface replaces an existing token with a new token.If the first token doesn't exist, replace() returns false immediately, without adding the new token to the token list.
    element.classList.replace("old-class", "new-class");

    // The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true.
    element.classList.toggle("class");

    // The read-only style property of the HTMLElement returns the inline style of an element in the form of a live CSSStyleDeclaration object that contains a list of all styles properties for that element with values assigned only for the attributes that are defined in the element's inline style attribute.
    element.style;

    // It is possible to set an inline style by assigning a string directly to the style property.
    element.style.backgroundColor = "red";
})();
