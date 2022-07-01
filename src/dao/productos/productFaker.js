import { faker } from '@faker-js/faker';

let productos = []
export function createFakeProduct() {
    for(let i = 0; i<5; i++ ){
        const producto = {
          title: faker.commerce.productName(),
          price: faker.commerce.price(),
          thumbnail: faker.image.imageUrl(),
    };
    productos.push(producto)
    }
    return producto
}

