const inputText = document.querySelector(".js-input-text")
const displayElement = document.querySelector(".js-display-element")

function onChangeHandler(event) {
    console.log("change", event)
    renderInputText(event.target.value)
}

function renderInputText(text) {
    // displayElement.innerHTML = text // This works but is a potential security risk because the value is set based on user Input
    displayElement.textContent = text
}

// inputText.addEventListener('change', onChangeHandler) // This syntax also works
inputText.addEventListener("change", (event) => onChangeHandler(event))
