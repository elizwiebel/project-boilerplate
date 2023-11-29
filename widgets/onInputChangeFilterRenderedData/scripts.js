"use strict";
(() => {
    const button = document.querySelector(".btn");
    const input = document.querySelector(".input");
    const dataContainer = document.getElementById("data-container");
    let resultsData = [];
    async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        resultsData = data.results;
        return resultsData;
    }
    function renderData(data, container) {
        const renderedHTML = data
            .map((item) => {
            return `<div class="item">${item.name}</div>`;
        })
            .join("");
        container.innerHTML = renderedHTML;
    }
    function clearInputValue() {
        if (input)
            input.value = "";
    }
    function filterData(query, data) {
        return data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
    }
    async function buttonClickHandler() {
        const data = await fetchData("../../data/pokemon.json");
        console.log("click", data);
        clearInputValue();
        renderData(data, dataContainer);
    }
    function inputHandler(e) {
        const inputValue = e.target.value;
        console.log("input", inputValue);
        const filteredResults = filterData(inputValue, resultsData);
        renderData(filteredResults, dataContainer);
    }
    button.addEventListener("click", buttonClickHandler);
    input.addEventListener("input", inputHandler);
})();
//# sourceMappingURL=scripts.js.map