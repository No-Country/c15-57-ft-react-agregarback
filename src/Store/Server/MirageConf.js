import { createServer, Model } from 'miragejs'
import { jaguarImg, osoAnteojos, ballenasFrancas  ,jaguarIcon ,ballenaIcon ,osoIcon ,ajolote ,ajoleteIcon} from '../../../src/assets/img-hero'
import {
  alojote,
  ballenaFranca,
  gatoAndino,
  jaguar,
  osoConAnteojos
} from '../../assets/animals'
import { gorras, remeras, tazas, vasos } from '../../assets/products'
import {
  taza01,
  taza02,
  taza03,
  taza04,
  taza05,
  taza06
} from '../../assets/products/tazas'
import {
  remera01,
  remera02,
  remera03,
  remera04,
  remera05,
  remera06
} from '../../assets/products/remeras'

export function makeServer() {
  return createServer({
    models: {
      animal: Model,
      user: Model,
      animalC: Model,
      productC: Model,
      product: Model
    },
    seeds(server) {
      // Animals
      server.create('animal', {
        id: 1,
        name: 'JAGUAR',
        img: jaguarImg,
        titular: 'Se encuentra en la Lista Roja de las especias amenazadas',
        detalle:
          'Hoy el jaguar es una especie amenazada que ha perdido aproximadamente 50% de su hábitat histórico en todo el continente.',
        link: 'JAGUAR',
        icon:jaguarIcon ,
      })
      server.create('animal', {
        id: 2,
        name: 'OSO ANTEOJOS',
        img: osoAnteojos,
        titular:
          'La deforestación son una de las principales amenazas que enfrenta.',
        detalle:
          'A pesar de ser un animal tímido que no hay registros de ataques contra humanos, Por eso, algunos campesinos los cazan para evitar que destruyan sus cultivos.',
        link: 'OSO-ANTEOJOS',
        icon:osoIcon ,
      })
      server.create('animal', {
        id: 3,
        name: 'BALLENA FRANCA',
        img: ballenasFrancas,
        titular: 'las hembras tienen sólo una cría cada tres años.',
        detalle:
          'Con sus extremidades anteriores convertidas en aletas, su gruesa capa de grasa y su capacidad para bucear, algunas a grandes profundidades.',
        link: 'BALLENA-FRANCA',
        icon:ballenaIcon ,
      })
      server.create('animal', {
        id: 4,
        name: ' AJOLOTE',
        img: ajolote,
        titular: 'las hembras tienen sólo una cría cada tres años.',
        detalle:
          'Con sus extremidades anteriores convertidas en aletas, su gruesa capa de grasa y su capacidad para bucear, algunas a grandes profundidades.',
        link: 'AJOLOT',
        icon:ajoleteIcon ,
      })
      // Users
      server.create('user', {
        id: crypto.randomUUID(),
        name: 'John',
        password: 'password1',
        email: 'johndoe@example.com'
      })
      server.create('user', {
        id: crypto.randomUUID(),
        password: 'password2',
        name: 'Jane',
        email: 'janedoe@example.com'
      })
      server.create('user', {
        id: crypto.randomUUID(),
        password: 'password3',
        name: 'Peter',
        email: 'peterjones@example.com'
      })
      server.create('user', {
        id: crypto.randomUUID(),
        password: 'password4',
        name: 'Mary',
        email: 'maryjones@example.com'
      })
      server.create('user', {
        id: crypto.randomUUID(),
        password: 'password5',
        name: 'David',
        email: 'davidsmith@example.com'
      })
      // AnimalCs
      server.create('animalC', {
        id: 1,
        name: 'alojote',
        img: alojote
      })
      server.create('animalC', {
        id: 2,
        name: 'Ballena Franca',
        img: ballenaFranca
      })
      server.create('animalC', {
        id: 3,
        name: 'Gato Andino',
        img: gatoAndino
      })
      server.create('animalC', {
        id: 4,
        name: 'Jaguar',
        img: jaguar
      })
      server.create('animalC', {
        id: 5,
        name: 'Oso Con Anteojos',
        img: osoConAnteojos
      })
      // productCs
      server.create('productC', {
        id: 1,
        name: 'Gorras',
        img: gorras
      })
      server.create('productC', {
        id: 2,
        name: 'Remeras',
        img: remeras
      })
      server.create('productC', {
        id: 3,
        name: 'Tazas',
        img: tazas
      })
      server.create('productC', {
        id: 4,
        name: 'Vasos',
        img: vasos
      })
      // products
      server.create('product', {
        id: 1,
        name: 'taza01',
        img: taza01,
        category: 'jaguar',
        type: 'Taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 2,
        name: 'taza02',
        img: taza02,
        category: 'jaguar',
        type: 'Taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 3,
        name: 'taza03',
        img: taza03,
        category: 'jaguar',
        type: 'Taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 4,
        name: 'taza04',
        img: taza04,
        category: 'jaguar',
        type: 'Taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 5,
        name: 'taza05',
        img: taza05,
        category: 'jaguar',
        type: 'Taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 6,
        name: 'taza06',
        img: taza06,
        category: 'jaguar',
        type: 'Taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 7,
        name: 'remera01',
        img: remera01,
        category: 'jaguar',
        type: 'Remera',
        description: 'Remera 100% algodon.',
        price: 8000
      })
      server.create('product', {
        id: 8,
        name: 'remera02',
        img: remera02,
        category: 'jaguar',
        type: 'Remera',
        description: 'Remera 100% algodon.',
        price: 7500
      })
      server.create('product', {
        id: 9,
        name: 'remera03',
        img: remera03,
        category: 'jaguar',
        type: 'Remera',
        description: 'Remera 100% algodon.',
        price: 8000
      })
      server.create('product', {
        id: 10,
        name: 'remera04',
        img: remera04,
        category: 'jaguar',
        type: 'Remera',
        description: 'Remera 100% algodon.',
        price: 7500
      })
      server.create('product', {
        id: 11,
        name: 'remera05',
        img: remera05,
        category: 'jaguar',
        type: 'Remera',
        description: 'Remera 100% algodon.',
        price: 8000
      })
      server.create('product', {
        id: 12,
        name: 'remera06',
        img: remera06,
        category: 'jaguar',
        type: 'Remera',
        description: 'Remera 100% algodon.',
        price: 7500
      })
    },


    routes () {
      // ANIMALS NAMESPACE
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
      // USERS NAMESPACE
      this.namespace = 'api/users'
      // Login route
      this.post('/login', (schema, request) => {
        const { email, password } = request.requestBody

        const user = schema.User.find({ email })
        if (user && user.password === password) {
          return user
        } else {
          return {
            success: false,
            message: 'Invalid email or password'
          }
        }
      })
      // Register route
      this.post('/register', (schema, request) => {
        const { email, password, name } = request.requestBody
        const user = schema.User.create({
          id: crypto.randomUUID(),
          email,
          password,
          name
        })


        // CRUD
        // Fetch all users
        this.get('/', (schema, request) => {
          return schema.User.all()
        })

        return user
      })
      // CRUD
      // Fetch all users
      this.get('/', (schema, request) => {
        return schema.users.all()
      })
      // Fetch a user by ID
      this.get('/:email', (schema, request) => {
        const email = request.params.email
        const user = schema.users.findBy({ email })

        return (
          user || {
            success: false,
            message: `User with id ${email} not found`
          }
        )
      })
      // Update a user
      this.put('/:id', (schema, request) => {
        const id = request.params.id
        const updatedUserAttrs = JSON.parse(request.requestBody)
        const user = schema.User.find(id)

        if (user) {
          user.update(updatedUserAttrs)
          return user
        } else {
          return {
            success: false,
            message: `User with ID ${id} not found`
          }
        }
      })
      // Delete a user
      this.delete('/:id', (schema, request) => {
        const id = request.params.id
        const user = schema.User.find(id)

        if (user) {
          user.destroy()
          return { success: true }
        } else {
          return {
            success: false,
            message: `User with ID ${id} not found`
          }
        }
      })

      // ANIMALCATEGORIES NAMESPACE
      this.namespace = 'api/animalCs'
      this.get('/', (schema, request) => {
        return schema.animalCs.all()
      })
      this.get('/:id', (schema, request) => {
        const id = request.params.id
        return schema.animalCs.find(id)
      })
      this.put('/:id', (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody)
        const id = request.params.id
        const product = schema.animalCs.find(id)
        return product.update(newAttrs)
      })
      this.post('/', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        return schema.animalCs.create(attrs)
      })
      this.delete('/:id', (schema, request) => {
        const id = request.params.id
        return schema.animalCs.find(id).destroy()
      })

      // PRODUCTCATEGORIES NAMESPACE
      this.namespace = 'api/productCs'
      this.get('/', (schema, request) => {
        return schema.productCs.all()
      })
      this.get('/:id', (schema, request) => {
        const id = request.params.id
        return schema.productCs.find(id)
      })
      this.put('/:id', (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody)
        const id = request.params.id
        const product = schema.productCs.find(id)
        return product.update(newAttrs)
      })
      this.post('/', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        return schema.productCs.create(attrs)
      })
      this.delete('/:id', (schema, request) => {
        const id = request.params.id
        return schema.productCs.find(id).destroy()
      })
      // PRODUCT CATEGORIES NAMESPACE
      this.namespace = 'api/products'

      // TAZAS ROUTE
      this.get('/tazas', (schema, request) => {
        return schema.products.all().filter((item) => item.type === 'Raza')
      })

      // REMERAS ROUTE
      this.get('/remeras', (schema, request) => {
        return schema.products.all().filter((item) => item.type === 'Remera')
      })

      // PRODUCT GENERAL ROUTES
      this.get('/', (schema, request) => {
        return schema.products.all()
      })
      this.get('/:id', (schema, request) => {
        const id = request.params.id
        return schema.products.find(id)
      })
      this.put('/:id', (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody)
        const id = request.params.id
        const product = schema.products.find(id)
        return product.update(newAttrs)
      })
      this.post('/', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        return schema.products.create(attrs)
      })
      this.delete('/:id', (schema, request) => {
        const id = request.params.id
        return schema.products.find(id).destroy()
      })
    }
  })
}
