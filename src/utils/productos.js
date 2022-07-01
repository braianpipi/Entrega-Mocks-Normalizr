import { faker } from '@faker-js/faker';

export function createFakeProduct() {
        const producto = {
          title: faker.commerce.productName(),
          price: faker.commerce.price(),
          thumbnail: faker.image.imageUrl(),
    };
    return producto
}

