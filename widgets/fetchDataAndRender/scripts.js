"use strict";
;
(() => {
    async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    }
    function renderData(data) {
        const renderedHTML = data.map((item) => `<div class="item">${item.name}</div>`).join("");
        dataContainer.innerHTML = renderedHTML;
    }
    async function buttonClickHandler() {
        const data = await fetchData("../../data/pokemon.json");
        console.log("data", data);
        renderData(data);
    }
    const dataContainer = document.getElementById("data-container");
    const button = document.querySelector(".btn");
    button.addEventListener("click", buttonClickHandler);
})();
