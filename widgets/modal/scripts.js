"use strict";
(() => {
    const openBtn = document.querySelector(".js-open-modal-btn");
    const modal = document.querySelector(".js-modal");
    function btnHandler() {
        console.log("click");
        modal.classList.toggle("--open");
        if (modal.getAttribute("aria-hidden") === "true") {
            modal.setAttribute("aria-hidden", "false");
        }
        else {
            modal.setAttribute("aria-hidden", "true");
        }
    }
    openBtn.addEventListener("click", btnHandler);
})();
//# sourceMappingURL=scripts.js.map