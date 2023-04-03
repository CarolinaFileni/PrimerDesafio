class ProductManager {
    #products
    constructor() {
        this.#products = []
        this.index = 0
    }
    getProducts = () => {
        return this.#products
        }

    getProductById = (id) => {
        return this.products.find((products) => products.id === id)
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        this.index++
        const id = this.index()
        const product = { id,  title, description, price, thumbnail, code, stock }
        // todas las propiedades sean obligatorias
        if (!title || !description || !price || !thumbnail || !thumbnail || !code || !stock) {
            return console.log('Faltan datos')
        }
        const index = this.products.findIndex((p) => p.code === code);
        if (index !== -1) {
        return console.log("Error, hay un codigo similar");
        }
        
        this.#products.push(product)
    }
}

const manager = new ProductManager()
manager.addProduct('Borcego', 'Marron con cordones y suela negra', 12000, /img/Borcego.jpg, 12345, 10)
manager.addProduct('Zapatilla', 'Blanca tipo converse', 8000, /img/Zapatilla.jpg, 12346, 12)
manager.addProduct('Sandalia', 'Gris con cinta y taco', 10500, /img/Sandalia.jpg, 12347, 8)
manager.addProduct('Muels', 'Marron con detalles floreados', 9400, /img/Muels.jpg, 12348, 15)
console.log(manager.getProducts())
console.log('El producto que buscaste segun el ID es:', manager.getProductById(2))

