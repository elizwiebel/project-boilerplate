"use strict";
;
(() => {
    const inputText = document.querySelector(".js-input-text");
    const displayElement = document.querySelector(".js-display-element");
    function onChangeHandler(e) {
        const inputValue = e.target.value;
        console.log("change", e);
        renderInputText(inputValue, displayElement);
    }
    function renderInputText(text, container) {
        container.textContent = text;
        // This is a potential security risk because the value is set based on user input
        // container.innerHTML = text
    }
    // This syntax also works
    // inputText.addEventListener('change', onChangeHandler)
    inputText.addEventListener("change", (e) => onChangeHandler(e));
})();
//# sourceMappingURL=scripts.js.map