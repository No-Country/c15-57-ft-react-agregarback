import { createServer, Model } from 'miragejs'
import {
  alojote,
  ballenaFranca,
  gatoAndino,
  jaguar,
  osoConAnteojos
} from '../../assets/animals'

export function makeServer () {
  return createServer({
    models: {
      animalC: Model
    },
    seeds (server) {
      // Animals
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
    },

    routes () {
      // ANIMAL CATEGORIES NAMESPACE

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
    }
  })
}
