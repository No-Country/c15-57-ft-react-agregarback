import { createServer, Model, Response } from 'miragejs'
import { jaguarImg, osoAnteojos, gatodelosandes, jaguarIcon, ballenaIcon, osoIcon, ajolote, ajoleteIcon } from '../../assets/img-hero'
import { alojote, ballenaFranca, gatoAndino, jaguar, osoConAnteojos, aguaraGuazu } from '../../assets/animals'
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
      whoWeAreInfoContent: Model,
      animal: Model,
      user: Model,
      animalC: Model,
      productC: Model,
      product: Model
    },

    seeds  (server) {
      // Who we are content

      server.create('whoWeAreInfoContent', {
        id: 1,
        MainTitle: 'QUIENES SOMOS',
        MainDescription: 'Preservación es una organización internacional de  protección animal que trabaja en países de Americe Latina  para reducir la extinción de los animales y sus hábitats. Con un programa abierto de donaciones para proyectos a favor de la conservación ambiental y de animales.',
        MainQuote: 'Los animales no son propiedades o cosas, sino organimdos vivientes, sujetos de una vida, que merecen nuestra compasión, respeto, amistad y apoyo.',
        MainQuoteAuthor: '(Marc Bekoff)',
        MapSectionTitle: 'CREADO EN LATINOAMERICA, PARA LATINOAMERICA',
        MapSectionOperations: 'Operando en 9 paises',
        MapSectionDefenders: 'Fuentes defensores en el equipo',
        MapSectionDonations: 'Donaciones en todo el mundo',
        DownSectionTitle: 'HEMOS SIDO CALIFICADOS COMO UNA DE LAS ONG MÁS EFECTIVAS DEL MUNDO',

        DownSectionDescription: '2023 es el quinto año consecutivo en el que Animal Charity Evaluators (ACE) reconoce a Preservación Animmal como una de las ONG de protección animal más efectivas del mundo'

      })
      // Animals
      server.create('animal', {
        id: 1,
        name: 'Jaguar',
        img: jaguarImg,
        titular: 'Se encuentra en la Lista Roja de las especias amenazadas',
        detalle:
          'Hoy el jaguar es una especie amenazada que ha perdido aproximadamente 50% de su hábitat histórico en todo el continente.',
        link: 'JAGUAR',
        icon: jaguarIcon
      })
      server.create('animal', {
        id: 2,
        name: 'Oso de Anteojos',
        img: osoAnteojos,
        titular:
          'La deforestación son una de las principales amenazas que enfrenta.',
        detalle:
          'A pesar de ser un animal tímido que no hay registros de ataques contra humanos, Por eso, algunos campesinos los cazan para evitar que destruyan sus cultivos.',
        link: 'OSO-ANTEOJOS',
        icon: osoIcon
      })
      server.create('animal', {
        id: 3,
        name: 'Gato Andino',
        img: gatodelosandes,
        titular: 'Es natural de América del Sur y  se limita a las regiones montañosas.',
        detalle:
          'Esta especie está en peligro de extinción a causa del hombre, debido a la caza furtiva y destrucción de su hábitat. La especie más cercana es el Leopardus colocolo.',
        link: 'GATO-ANDINO',
        icon: ballenaIcon
      })
      server.create('animal', {
        id: 4,
        name: 'Ajolote',
        img: ajolote,
        titular: 'las hembras tienen sólo una cría cada tres años.',
        detalle:
          'Con sus extremidades anteriores convertidas en aletas, su gruesa capa de grasa y su capacidad para bucear, algunas a grandes profundidades.',
        link: 'AJOLOT',
        icon: ajoleteIcon
      })
      // Users
      server.create('user', {
        id: crypto.randomUUID(),
        password: 'Password1@',
        name: 'John',
        email: 'johndoe@example.com',
        question: 'opcion1',
        answer: 'balto'
      })
      server.create('user', {
        id: crypto.randomUUID(),
        password: 'Password2&',
        name: 'Jane',
        email: 'janedoe@example.com',
        question: 'opcion2',
        answer: 'Ciudad de Mexico'
      })
      server.create('user', {
        id: crypto.randomUUID(),
        password: 'Password3%',
        name: 'Peter',
        email: 'jonesjj@example.com',
        question: 'opcion3',
        answer: 'tacos'
      })
      server.create('user', {
        id: crypto.randomUUID(),
        password: 'Password4&',
        name: 'Mary',
        email: 'maryjones@example.com',
        question: 'opcion3',
        answer: 'pizza'
      })
      server.create('user', {
        id: crypto.randomUUID(),
        password: 'Password5$',
        name: 'David',
        email: 'davidsmith@example.com',
        question: 'opcion2',
        answer: 'Buenos aires'
      })
      server.create('user', {
        id: crypto.randomUUID(),
        password: 'Password6$',
        name: 'David',
        email: 'carlssmith@example.com',
        question: 'opcion1',
        answer: 'fluffy'
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
      server.create('animalC', {
        id: 6,
        name: 'Aguara Guazu',
        img: aguaraGuazu
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

      // Who we are info content controller
      this.namespace = 'api/whoWeAreInfoContents'
      this.get('/', schema => {
        return schema.whoWeAreInfoContents.all()
      })

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
      this.post('/google-login', (_, request) => {
        return {
          user: {
            id: crypto.randomUUID(),
            name: 'Usuario de Google',
            email: 'google@example.com'
          }
        }
      })
      this.post('/facebook-login', (_, request) => {
        return {
          user: {
            id: crypto.randomUUID(),
            name: 'Usuario de Facebook',
            email: 'facebook@example.com'
          }
        }
      })
      this.post('/check-question', (schema, request) => {
        const { email } = JSON.parse(request.requestBody)
        const user = schema.users.findBy({ email })
        if (user) {
          return {
            email,
            question: user.question
          }
        } else {
          return new Response(400, {}, { error: 'Correo invalido' })
        }
      })
      this.post('/find-password', (schema, request) => {
        const { email, answer } = JSON.parse(request.requestBody)
        const user = schema.users.findBy({ email, answer })
        if (user) {
          return {
            password: user.password
          }
        } else {
          return new Response(400, {}, { error: 'Correo invalido' })
        }
      })
      this.delete('/:id', (schema, request) => {
        const id = request.params.id
        return schema.users.find(id).destroy()
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
      //   CATEGORIES NAMESPACE
      this.namespace = 'api/products'

      // TAZAS ROUTE
      this.get('/Tazas', (schema, request) => {
        return schema.products.all().filter((item) => item.type === 'Taza')
      })

      // REMERAS ROUTE
      this.get('/Remeras', (schema, request) => {
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
