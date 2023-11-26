# JS Promises

```typescript
function testPromise01(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo")
        }, 300)
    })
}

function testPromise02(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo")
        }, 300)
    })
}

testPromise01()
    .then((message) => {
        console.log("message:", message)
    })
    .catch((error) => {
        console.log("error", error)
    })

Promise.all([testPromise01(), testPromise02()]).then((messages) => {
    console.log("messages:", messages)
})
```
