# JS Method - apply()

```typescript
function Product(type: string, price: number): void {
    this.type = type
    this.price = price
}

function Food(type: string, price: number): void {
    Product.apply(this, [type, price])
    this.category = "food"
}

const cheddar = new (Food as any)("cheese", 5)
console.log(cheddar.type) // cheese
console.log(cheddar.category) // food

const newCheese = {}
```
