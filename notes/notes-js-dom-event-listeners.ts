((): void => {
    // JS DOM EVENT LISTENERS

    const element = document.querySelector(".element")!;

    function genericHandler(e: Event): void {
        console.log("event", e);
    }

    // An element receives a click event when a pointing device button (such as a mouse's primary mouse button) is both pressed and released while the pointer is located inside the element.
    element.addEventListener("click", (e) => genericHandler(e));

    // The focus event fires when an element has received focus. The event does not bubble, but the related focusin event that follows does bubble.
    element.addEventListener("focus", (e) => genericHandler(e));

    // The blur event fires when an element has lost focus. The event does not bubble, but the related focusout event that follows does bubble.
    element.addEventListener("blur", (e) => genericHandler(e));

    // The focusin event fires when an element has received focus, after the focus event. The two events differ in that focusin bubbles, while focus does not.
    element.addEventListener("focusin", (e) => genericHandler(e));

    // The focusout event fires when an element has lost focus, after the blur event. The two events differ in that focusout bubbles, while blur does not.
    element.addEventListener("focusout", (e) => genericHandler(e));

    // The keydown event is fired when a key is pressed.
    element.addEventListener("keydown", (e) => genericHandler(e));

    // The keyup event is fired when a key is released.
    element.addEventListener("keyup", (e) => genericHandler(e));

    // The mousedown event is fired at an Element when a pointing device button is pressed while the pointer is inside the element.
    element.addEventListener("mousedown", (e) => genericHandler(e));

    // The mouseup event is fired at an Element when a button on a pointing device (such as a mouse or trackpad) is released while the pointer is located inside it.
    element.addEventListener("mouseup", (e) => genericHandler(e));

    // The mouseenter event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.
    element.addEventListener("mouseenter", (e) => genericHandler(e));

    // The mouseleave event is fired at an Element when the cursor of a pointing device (usually a mouse) is moved out of it.
    element.addEventListener("mouseleave", (e) => genericHandler(e));

    // The scroll event fires when an element has been scrolled. To detect when scrolling has completed, see the Element: scrollend event.
    element.addEventListener("scroll", (e) => genericHandler(e));

    // The removeEventListener() method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target. The event listener to be removed is identified using a combination of the event type, the event listener function itself, and various optional options that may affect the matching process; see Matching event listeners for removal.
    element.removeEventListener("click", genericHandler);

    // The Event() constructor creates a new Event object. An event created in this way is called a synthetic event, as opposed to an event fired by the browser, and can be dispatched by a script.
    const customEvent = new Event("customevent");

    document.addEventListener("customevent", (e) => genericHandler(e));

    // The dispatchEvent() method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent().
    document.dispatchEvent(customEvent);
})();
