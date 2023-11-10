const testObj = {
    "name": "squirtle",
    "url": "https://pokeapi.co/api/v2/pokemon/7/",
    "address": {
        "street": "1 river ave",
        "locations": ["river", "grass"]
    }
}

const { name } = testObj
console.log('name:', name) // squirtle

const { address: { street: road } } = testObj
console.log('street:', road) // 1 river ave

const { address: { locations: [firstLocation] } } = testObj
console.log('first location:', firstLocation) // river

const lookupValue = 'address'
const { [lookupValue]: { locations: [,secondLocation] } } = testObj
console.log('second location:', secondLocation) // grass