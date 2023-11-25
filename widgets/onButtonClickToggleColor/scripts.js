"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function btnClickHandler() {
    console.log("click");
    if (!content)
        return;
    content.classList.toggle("--red");
    // This check also works but it is not as simple
    // if (content.style.color === "red") {
    //     content.removeAttribute("style")
    //     // This also works but leaves the style attribute in the HTML
    //     // content.style.color = ""
    // } else {
    //     content.style.color = "red"
    // }
}
const btn = document.querySelector(".js-toggle-btn");
const content = document.querySelector(".js-toggle-content");
btn?.addEventListener("click", btnClickHandler);
