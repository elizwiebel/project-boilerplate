async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    resultsData = data.results
    return resultsData
}

function renderData(data) {
    const renderedHTML = data
        .map((item) => {
            return `<div class="item">${item.name}</div>`
        })
        .join("")

    document.getElementById("demo").innerHTML = renderedHTML
}

function clearInputValue() {
    input.value = ""
}

function filterData(query) {
    return resultsData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()),
    )
}

async function buttonClickHandler() {
    const data = await fetchData("../../data/pokemon.json")
    console.log("click", data)
    clearInputValue()
    renderData(data)
}

function inputHandler(event) {
    console.log("input", event.target.value)

    const filteredResults = filterData(event.target.value)
    renderData(filteredResults)
}

const button = document.querySelector(".btn")
const input = document.querySelector(".input")
let resultsData = []

button.addEventListener("click", buttonClickHandler)
input.addEventListener("input", inputHandler)
