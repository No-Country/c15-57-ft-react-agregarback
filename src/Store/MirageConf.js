import { createServer, Model } from 'miragejs'
import { jaguarImg, osoAnteojos, ballenasFrancas } from '../assets/img-hero'

export function makeServer() {
  return createServer({
    models: {
      animal: Model,
      user: Model
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
        password: 'password3',
        name: 'Peter',
        lastName: 'Jones',
        email: 'peterjones@example.com'
      })
      server.create('user', {
        id: 4,
        username: 'maryjones',
        password: 'password4',
        name: 'Mary',
        lastName: 'Jones',
        email: 'maryjones@example.com'
      })
      server.create('user', {
        id: 5,
        username: 'davidsmith',
        password: 'password5',
        name: 'David',
        lastName: 'Smith',
        email: 'davidsmith@example.com'
      })
    },

    routes() {
      // animals
      this.namespace = 'api/animals'
      this.get('/', (schema, request) => {
        return schema.animals.all()
      })
      this.get('/:id', (schema, request) => {
        let id = request.params.id
        return schema.animals.find(id)
      })
      this.put('/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody)
        let id = request.params.id
        let product = schema.animals.find(id)
        return product.update(newAttrs)
      })
      this.post('/', (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        return schema.animals.create(attrs)
      })
      this.delete('/:id', (schema, request) => {
        let id = request.params.id
        return schema.animals.find(id).destroy()
      })
      // users
      this.namespace = 'api/users'
      this.get('/', (schema, request) => {
        return schema.users.all()
      })
      this.get('/:id', (schema, request) => {
        let id = request.params.id
        return schema.users.find(id)
      })
      this.put('/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody)
        let id = request.params.id
        let product = schema.users.find(id)
        return product.update(newAttrs)
      })
      this.post('/', (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        return schema.users.create(attrs)
      })
      this.delete('/:id', (schema, request) => {
        let id = request.params.id
        return schema.users.find(id).destroy()
      })
    }
  })
}
