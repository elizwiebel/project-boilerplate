((): void => {
    type Pokemon = {
        name: string;
        url: string;
    }[];

    const dataContainer = document.getElementById("data-container")! as HTMLElement;
    const button = document.querySelector(".btn")! as HTMLElement;

    async function fetchData(url: string): Promise<Pokemon> {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    }

    function renderData(data: Pokemon): void {
        const renderedHTML = data.map((item) => `<div class="item">${item.name}</div>`).join("");
        dataContainer.innerHTML = renderedHTML;
    }

    async function buttonClickHandler(): Promise<void> {
        const data = await fetchData("../../data/pokemon.json");
        console.log("data", data);
        renderData(data);
    }

    button.addEventListener("click", buttonClickHandler);
})();
