"use strict";
;
(() => {
    const accordionBtns = document.querySelectorAll(".accordion-btn");
    for (const btn of accordionBtns) {
        btn.addEventListener("click", (e) => {
            const currentElement = e.target;
            const panel = currentElement.nextElementSibling;
            if (!panel)
                return;
            currentElement.classList.toggle("--open");
            panel.classList.toggle("--open");
        });
    }
})();
