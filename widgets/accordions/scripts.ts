((): void => {
    const accordionBtns = document.querySelectorAll(".accordion-btn")! as NodeListOf<HTMLElement>;

    for (const btn of accordionBtns) {
        const panel = btn.nextElementSibling as HTMLElement;

        if (panel.classList.contains("--open")) {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        btn.addEventListener("click", (e: Event): void => {
            const panel = (e.target as HTMLElement).nextElementSibling as HTMLElement;

            if (!panel) return;

            if (panel.style.maxHeight) {
                panel.removeAttribute("style");
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }

            (e.target as HTMLElement).classList.toggle("--open");
            panel.classList.toggle("--open");
        });
    }
})();
