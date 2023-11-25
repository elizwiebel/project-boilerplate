function testPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo")
        }, 300)
    })
}

testPromise()
    .then((message) => {
        console.log("message:", message)
    })
    .catch((error) => {
        console.log("error", error)
    })
