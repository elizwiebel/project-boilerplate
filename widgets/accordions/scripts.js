"use strict";
(() => {
    const accordionBtns = document.querySelectorAll(".accordion-btn");
    for (const btn of accordionBtns) {
        const panel = btn.nextElementSibling;
        if (panel.classList.contains("--open")) {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        btn.addEventListener("click", (e) => {
            const panel = e.target.nextElementSibling;
            if (!panel)
                return;
            if (panel.style.maxHeight) {
                panel.removeAttribute("style");
            }
            else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
            e.target.classList.toggle("--open");
            panel.classList.toggle("--open");
        });
    }
})();
//# sourceMappingURL=scripts.js.map