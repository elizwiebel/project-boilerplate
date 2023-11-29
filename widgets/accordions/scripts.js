"use strict";
(() => {
    const accordionBtns = document.querySelectorAll(".accordion-btn");
    for (const btn of accordionBtns) {
        btn.addEventListener("click", (e) => {
            const panel = e.target.nextElementSibling;
            if (!panel)
                return;
            e.target.classList.toggle("--open");
            panel.classList.toggle("--open");
        });
    }
})();
//# sourceMappingURL=scripts.js.map