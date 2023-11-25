;((): void => {
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

    const inputText: HTMLElement = document.querySelector(".js-input-text")!
    const displayElement: HTMLElement = document.querySelector(".js-display-element")!

    // This syntax also works
    // inputText.addEventListener('change', onChangeHandler)
    inputText.addEventListener("change", (e) => onChangeHandler(e))
})()
