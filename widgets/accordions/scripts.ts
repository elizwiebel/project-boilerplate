;((): void => {
    const accordionBtns: NodeListOf<Element> = document.querySelectorAll(".accordion-btn")

    for (const btn of accordionBtns) {
        btn.addEventListener("click", (e: Event): void => {
            const currentElement = e.target as HTMLElement
            const panel = currentElement.nextElementSibling

            if (!panel) return

            currentElement.classList.toggle("--open")
            panel.classList.toggle("--open")
        })
    }
})()
