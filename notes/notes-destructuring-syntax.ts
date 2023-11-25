const pokemonData = {
    name: "squirtle",
    url: "https://pokeapi.co/api/v2/pokemon/7/",
    address: {
        street: "1 river ave",
        locations: ["river", "grass"],
    },
}

const { name: pokemonName } = pokemonData
console.log("name:", pokemonName) // name: squirtle

const {
    address: { street: road },
} = pokemonData
console.log("street:", road) // street: 1 river ave

const {
    address: {
        locations: [firstLocation],
    },
} = pokemonData
console.log("first location:", firstLocation) // first location: river

const lookupValue = "address"
const {
    [lookupValue]: {
        locations: [, secondLocation],
    },
} = pokemonData
console.log("second location:", secondLocation) // second location: grass
