"use strict";
;
(function () {
    async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    }
    function renderData(data) {
        const renderedHTML = data.map((item) => `<div class="item">${item.name}</div>`).join("");
        if (demo)
            demo.innerHTML = renderedHTML;
    }
    async function buttonClickHandler() {
        const data = await fetchData("../../data/pokemon.json");
        console.log("data", data);
        renderData(data);
    }
    const demo = document.getElementById("demo");
    const button = document.querySelector(".btn");
    button?.addEventListener("click", buttonClickHandler);
})();
