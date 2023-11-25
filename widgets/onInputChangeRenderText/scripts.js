const inputText = document.querySelector(".js-input-text")
const displayElement = document.querySelector(".js-display-element")

function onChangeHandler(event) {
    console.log("change", event)
    renderInputText(event.target.value)
}

function renderInputText(text) {
    displayElement.textContent = text

    // This is a potential security risk because the value is set based on user input
    // displayElement.innerHTML = text
}

// inputText.addEventListener('change', onChangeHandler) // This syntax also works
inputText.addEventListener("change", (event) => onChangeHandler(event))
