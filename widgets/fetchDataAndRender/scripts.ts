;(function (): void {
    type Pokemon = {
        name: string
        url: string
    }[]

    async function fetchData(url: string): Promise<Pokemon> {
        const response = await fetch(url)
        const data = await response.json()
        return data.results
    }

    function renderData(data: Pokemon): void {
        const renderedHTML = data.map((item) => `<div class="item">${item.name}</div>`).join("")

        if (demo) demo.innerHTML = renderedHTML
    }

    async function buttonClickHandler(): Promise<void> {
        const data = await fetchData("../../data/pokemon.json")
        console.log("data", data)
        renderData(data)
    }

    const demo = document.getElementById("demo")
    const button: HTMLElement | null = document.querySelector(".btn")
    button?.addEventListener("click", buttonClickHandler)
})()
