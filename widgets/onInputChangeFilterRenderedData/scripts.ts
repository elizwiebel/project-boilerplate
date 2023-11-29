((): void => {
    type Pokemon = {
        name: string;
        url: string;
    }[];

    const button = document.querySelector(".btn") as HTMLInputElement;
    const input = document.querySelector(".input") as HTMLInputElement;
    const dataContainer = document.getElementById("data-container") as HTMLInputElement;

    let resultsData: Pokemon = [];

    async function fetchData(url: string) {
        const response = await fetch(url);
        const data = await response.json();
        resultsData = data.results;
        return resultsData;
    }

    function renderData(data: Pokemon, container: HTMLElement): void {
        const renderedHTML = data
            .map((item) => {
                return `<div class="item">${item.name}</div>`;
            })
            .join("");

        container.innerHTML = renderedHTML;
    }

    function clearInputValue(): void {
        if (input) input.value = "";
    }

    function filterData(query: string, data: Pokemon): Pokemon {
        return data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
    }

    async function buttonClickHandler(): Promise<void> {
        const data = await fetchData("../../data/pokemon.json");
        console.log("click", data);
        clearInputValue();
        renderData(data, dataContainer);
    }

    function inputHandler(e: Event): void {
        const inputValue = (e.target as HTMLInputElement).value;

        console.log("input", inputValue);

        const filteredResults = filterData(inputValue, resultsData);
        renderData(filteredResults, dataContainer);
    }

    button.addEventListener("click", buttonClickHandler);
    input.addEventListener("input", inputHandler);
})();
