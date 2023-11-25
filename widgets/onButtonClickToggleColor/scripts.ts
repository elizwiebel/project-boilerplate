;(function (): void {
    function btnClickHandler(): void {
        console.log("click")

        if (!content) return
        content.classList.toggle("--red")

        // This check also works but it is not as simple
        // if (content.style.color === "red") {
        //     content.removeAttribute("style")
        //     // This also works but leaves the style attribute in the HTML
        //     // content.style.color = ""
        // } else {
        //     content.style.color = "red"
        // }
    }

    const button: HTMLElement | null = document.querySelector(".js-toggle-btn")
    const content: HTMLElement | null = document.querySelector(".js-toggle-content")
    button?.addEventListener("click", btnClickHandler)
})()
