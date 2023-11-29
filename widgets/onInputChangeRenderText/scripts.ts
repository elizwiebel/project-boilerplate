;((): void => {
    const inputText = document.querySelector(".js-input-text") as HTMLInputElement
    const displayElement = document.querySelector(".js-display-element") as HTMLElement

    function onChangeHandler(e: Event): void {
        const inputValue = (e.target as HTMLInputElement).value
        console.log("change", e)
        renderInputText(inputValue, displayElement)
    }

    function renderInputText(text: string, container: HTMLElement): void {
        container.textContent = text

        // This is a potential security risk because the value is set based on user input
        // container.innerHTML = text
    }

    // This syntax also works
    // inputText.addEventListener('change', onChangeHandler)
    inputText.addEventListener("change", (e) => onChangeHandler(e))
})()
