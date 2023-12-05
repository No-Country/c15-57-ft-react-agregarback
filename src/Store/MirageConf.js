/* import { createServer, Model } from 'miragejs'

createServer({
  models: {
    product: Model
  },
  seeds(server) {
    server.create('product', {
      id: 30,
      title: 'Key Holder',
      description:
        'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
      price: 30,
      discountPercentage: 2.92,
      rating: 4.92,
      stock: 54,
      brand: 'Golden',
      category: 'home-decoration',
      thumbnail: 'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/30/1.jpg',
        'https://i.dummyjson.com/data/products/30/2.jpg',
        'https://i.dummyjson.com/data/products/30/3.jpg',
        'https://i.dummyjson.com/data/products/30/thumbnail.jpg'
      ]
    })
    server.create('product', {
      id: 6,
      title: 'MacBook Pro',
      description:
        'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: 'Apple',
      category: 'laptops',
      thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
      images: [
        'https://i.dummyjson.com/data/products/6/1.png',
        'https://i.dummyjson.com/data/products/6/2.jpg',
        'https://i.dummyjson.com/data/products/6/3.png',
        'https://i.dummyjson.com/data/products/6/4.jpg'
      ]
    })
    server.create('product', {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/2/1.jpg',
        'https://i.dummyjson.com/data/products/2/2.jpg',
        'https://i.dummyjson.com/data/products/2/3.jpg',
        'https://i.dummyjson.com/data/products/2/thumbnail.jpg'
      ]
    })
    server.create('product', {
      id: 3,
      title: 'Samsung Universe 9',
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: 'Samsung',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      images: ['https://i.dummyjson.com/data/products/3/1.jpg']
    })
    server.create('product', {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: 'OPPO',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/4/1.jpg',
        'https://i.dummyjson.com/data/products/4/2.jpg',
        'https://i.dummyjson.com/data/products/4/3.jpg',
        'https://i.dummyjson.com/data/products/4/4.jpg',
        'https://i.dummyjson.com/data/products/4/thumbnail.jpg'
      ]
    })
    server.create('product', {
      id: 5,
      title: 'Huawei P30',
      description:
        'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: 'Huawei',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/5/1.jpg',
        'https://i.dummyjson.com/data/products/5/2.jpg',
        'https://i.dummyjson.com/data/products/5/3.jpg'
      ]
    })
    server.create('product', {
      id: 7,
      title: 'Samsung Galaxy Book',
      description:
        'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: 'Samsung',
      category: 'laptops',
      thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/7/1.jpg',
        'https://i.dummyjson.com/data/products/7/2.jpg',
        'https://i.dummyjson.com/data/products/7/3.jpg',
        'https://i.dummyjson.com/data/products/7/thumbnail.jpg'
      ]
    })
    server.create('product', {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
      ]
    })
    server.create('product', {
      id: 8,
      title: 'Microsoft Surface Laptop 4',
      description:
        'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: 'Microsoft Surface',
      category: 'laptops',
      thumbnail: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/8/1.jpg',
        'https://i.dummyjson.com/data/products/8/2.jpg',
        'https://i.dummyjson.com/data/products/8/3.jpg',
        'https://i.dummyjson.com/data/products/8/4.jpg',
        'https://i.dummyjson.com/data/products/8/thumbnail.jpg'
      ]
    })
    server.create('product', {
      id: 9,
      title: 'Infinix INBOOK',
      description:
        'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      brand: 'Infinix',
      category: 'laptops',
      thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/9/1.jpg',
        'https://i.dummyjson.com/data/products/9/2.png',
        'https://i.dummyjson.com/data/products/9/3.png',
        'https://i.dummyjson.com/data/products/9/4.jpg',
        'https://i.dummyjson.com/data/products/9/thumbnail.jpg'
      ]
    })
    server.create('product', {
      id: 10,
      title: 'HP Pavilion 15-DK1056WM',
      description:
        'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
      price: 1099,
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      brand: 'HP Pavilion',
      category: 'laptops',
      thumbnail: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
      images: [
        'https://i.dummyjson.com/data/products/10/1.jpg',
        'https://i.dummyjson.com/data/products/10/2.jpg',
        'https://i.dummyjson.com/data/products/10/3.jpg',
        'https://i.dummyjson.com/data/products/10/thumbnail.jpeg'
      ]
    })
  },

  routes() {
    this.namespace = 'api/products'

    this.get('/', (schema, request) => {
      return schema.products.all()
    })

    this.get('/:id', (schema, request) => {
      let id = request.params.id
      return schema.products.find(id)
    })

    this.put('/:id', (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody)
      let id = request.params.id
      let product = schema.products.find(id)
      return product.update(newAttrs)
    })

    this.post('/', (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      return schema.products.create(attrs)
    })

    this.delete('/:id', (schema, request) => {
      let id = request.params.id
      return schema.products.find(id).destroy()
    })
  }
}) */

import { createServer, Model, Response } from 'miragejs'
import { jaguarImg, osoAnteojos, ballenasFrancas } from '../assets/img-hero'

export function makeServer () {
  return createServer({
    models: {
      animal: Model,
      user: Model
    },
    seeds (server) {
      // Animals
      server.create('animal', {
        id: 1,
        name: 'JAGUAR',
        img: jaguarImg,
        titular: 'Se encuentra en la Lista Roja de las especias amenazadas',
        detalle:
          'Hoy el jaguar es una especie amenazada que ha perdido aproximadamente 50% de su hábitat histórico en todo el continente.',
        link: '/info-JAGUAR'
      })
      server.create('animal', {
        id: 2,
        name: 'OSO ANTEOJOS',
        img: osoAnteojos,
        titular:
          'La deforestación son una de las principales amenazas que enfrenta.',
        detalle:
          'A pesar de ser un animal tímido que no hay registros de ataques contra humanos, Por eso, algunos campesinos los cazan para evitar que destruyan sus cultivos.',
        link: '/info-OSO'
      })
      server.create('animal', {
        id: 3,
        name: 'BALLENA FRANCA',
        img: ballenasFrancas,
        titular: 'las hembras tienen sólo una cría cada tres años.',
        detalle:
          'Con sus extremidades anteriores convertidas en aletas, su gruesa capa de grasa y su capacidad para bucear, algunas a grandes profundidades.',
        link: '/info-BALLENA'
      })
      // Users
      server.create('user', {
        id: 1,
        username: 'johndoe',
        password: 'password1',
        name: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com'
      })
      server.create('user', {
        id: 2,
        username: 'janedoe',
        password: 'password2',
        name: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@example.com'
      })
      server.create('user', {
        id: 3,
        username: 'peterjones',
        password: 'Password3%',
        name: 'Peter',
        lastName: 'Jones',
        email: 'jonesjj@example.com'
      })
      server.create('user', {
        id: 4,
        username: 'maryjones',
        password: 'Password4&',
        name: 'Mary',
        lastName: 'Jones',
        email: 'maryjones@example.com'
      })
      server.create('user', {
        id: 5,
        username: 'davidsmith',
        password: 'Password5$',
        name: 'David',
        lastName: 'Smith',
        email: 'davidsmith@example.com'
      })
    },

    routes () {
      // animals
      this.namespace = 'api/animals'
      this.get('/', (schema, request) => {
        return schema.animals.all()
      })
      this.get('/:id', (schema, request) => {
        const id = request.params.id
        return schema.animals.find(id)
      })
      this.put('/:id', (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody)
        const id = request.params.id
        const product = schema.animals.find(id)
        return product.update(newAttrs)
      })
      this.post('/', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        return schema.animals.create(attrs)
      })
      this.delete('/:id', (schema, request) => {
        const id = request.params.id
        return schema.animals.find(id).destroy()
      })
      // users
      this.namespace = 'api/users'
      this.get('/', (schema, request) => {
        return schema.users.all()
      })
      this.get('/:id', (schema, request) => {
        const id = request.params.id
        return schema.users.find(id)
      })
      this.put('/:id', (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody)
        const id = request.params.id
        const product = schema.users.find(id)
        return product.update(newAttrs)
      })
      this.post('/', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        const existingUser = schema.users.findBy({ email: attrs.email })

        if (existingUser) {
          return new Response(400, {}, { error: 'El correo ya está registrado' })
        }
        return schema.users.create(attrs)
      })
      this.post('/login', (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody)
        const user = schema.users.findBy({ email, password })
        if (user) {
          return {
            token: user.id,
            email: user.email,
            password: user.password
          }
        } else {
          return new Response(400, {}, { error: 'Correo o contraseña invalida' })
        }
      })
      this.put('/reset-password', (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody)

        const user = schema.users.findBy({ email })
        if (user) {
          user.update({ newPassword: password })
          return { message: 'Contraseña cambiada con éxito' }
        } else {
          return { message: 'Usuario no encontrado' }
        }
      })
      this.delete('/:id', (schema, request) => {
        const id = request.params.id
        return schema.users.find(id).destroy()
      })
    }
  })
}
