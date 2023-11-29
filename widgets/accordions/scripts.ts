((): void => {
    const accordionBtns = document.querySelectorAll(".accordion-btn") as NodeListOf<HTMLElement>;

    for (const btn of accordionBtns) {
        btn.addEventListener("click", (e: Event): void => {
            const panel = (e.target as HTMLElement).nextElementSibling;

            if (!panel) return;

            (e.target as HTMLElement).classList.toggle("--open");
            panel.classList.toggle("--open");
        });
    }
})();
