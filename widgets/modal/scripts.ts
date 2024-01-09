((): void => {
    const openBtn = document.querySelector(".js-open-modal-btn") as HTMLElement;
    const modal = document.querySelector(".js-modal") as HTMLElement;

    function btnHandler(): void {
        console.log("click");
        modal.classList.toggle("--open");

        if (modal.getAttribute("aria-hidden") === "true") {
            modal.setAttribute("aria-hidden", "false");
        } else {
            modal.setAttribute("aria-hidden", "true");
        }
    }

    openBtn.addEventListener("click", btnHandler);
})();
