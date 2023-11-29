((): void => {
    const button = document.querySelector(".js-toggle-btn") as HTMLElement;
    const content = document.querySelector(".js-toggle-content") as HTMLElement;

    function btnClickHandler(): void {
        console.log("click");
        content.classList.toggle("--red");

        // // This check also works but it is not as simple
        // if (content.style.color === "red") {
        //     content.removeAttribute("style")
        //     // This also works but leaves the style attribute in the HTML
        //     // content.style.color = ""
        // } else {
        //     content.style.color = "red"
        // }
    }

    button.addEventListener("click", btnClickHandler);
})();
