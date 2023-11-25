async function fetchDataAsyncMethod(url: string): Promise<any> {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            const message = `${response.status}`
            throw new Error(message)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// TEST CONFIG
// fetchDataAsyncMethod("https://jsonplaceholder.typicode.com/todos/1").then(data => console.log("data", data))
