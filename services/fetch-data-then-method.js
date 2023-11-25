const fetchDataThenMethod = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                const message = `${response.status}`
                throw new Error(message)
            }

            return response.json()
        })
        .catch((error) => {
            console.error(error)
        })
}

// TEST CONFIG
// fetchDataThenMethod("https://jsonplaceholder.typicode.com/todos/1").then(data => console.log("data", data))
