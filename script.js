class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    productDetails() {
        return `O nome do produto é ${this.name} com valor de ${this.price}`
    }
}

const socks = new Product('Meia branca', 10)
const shirt = new Product('camiseta preta', 5)
console.log(socks.productDetails())
console.log(shirt.productDetails())
