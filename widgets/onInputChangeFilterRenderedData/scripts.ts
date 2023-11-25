;((): void => {
    type Pokemon = {
        name: string
        url: string
    }[]

    async function fetchData(url: string) {
        const response = await fetch(url)
        const data = await response.json()
        resultsData = data.results
        return resultsData
    }

    function renderData(data: Pokemon, container: HTMLElement): void {
        const renderedHTML = data
            .map((item) => {
                return `<div class="item">${item.name}</div>`
            })
            .join("")

        container.innerHTML = renderedHTML
    }

    function clearInputValue(): void {
        if (input) input.value = ""
    }

    function filterData(query: string, data: Pokemon): Pokemon {
        return data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    }

    async function buttonClickHandler(): Promise<void> {
        const data = await fetchData("../../data/pokemon.json")
        console.log("click", data)
        clearInputValue()
        renderData(data, dataContainer)
    }

    function inputHandler(e: Event): void {
        const inputValue = (e.target as HTMLInputElement).value

        console.log("input", inputValue)

        const filteredResults = filterData(inputValue, resultsData)
        renderData(filteredResults, dataContainer)
    }

    let resultsData: Pokemon = []

    const button: HTMLElement = document.querySelector(".btn")!
    const input: HTMLInputElement = document.querySelector(".input")!
    const dataContainer: HTMLElement = document.getElementById("data-container")!

    button.addEventListener("click", buttonClickHandler)
    input.addEventListener("input", inputHandler)
})()
