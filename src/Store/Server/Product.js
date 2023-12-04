import { createServer, Model } from 'miragejs'
import { taza01, taza02, taza03, taza04, taza05, taza06 } from '../../assets/products/tazas'
import { remera01, remera02, remera03, remera04, remera05, remera06 } from '../../assets/products/remeras'

export function productmakeServer () {
  return createServer({
    models: {
      product: Model
    },
    seeds (server) {
      // products
      server.create('product', {
        id: 1,
        name: 'taza01',
        img: taza01,
        category: 'jaguar',
        type: 'taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 2,
        name: 'taza02',
        img: taza02,
        category: 'jaguar',
        type: 'taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 3,
        name: 'taza03',
        img: taza03,
        category: 'jaguar',
        type: 'taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 4,
        name: 'taza04',
        img: taza04,
        category: 'jaguar',
        type: 'taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 5,
        name: 'taza05',
        img: taza05,
        category: 'jaguar',
        type: 'taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 6,
        name: 'taza06',
        img: taza06,
        category: 'jaguar',
        type: 'taza',
        description: 'Taza cerámica 200ml.',
        price: 800
      })
      server.create('product', {
        id: 7,
        name: 'remera01',
        img: remera01,
        category: 'jaguar',
        type: 'remera',
        description: 'Remera 100% algodon.',
        price: 8000
      })
      server.create('product', {
        id: 8,
        name: 'remera02',
        img: remera02,
        category: 'jaguar',
        type: 'remera',
        description: 'Remera 100% algodon.',
        price: 7500
      })
      server.create('product', {
        id: 9,
        name: 'remera03',
        img: remera03,
        category: 'jaguar',
        type: 'remera',
        description: 'Remera 100% algodon.',
        price: 8000
      })
      server.create('product', {
        id: 10,
        name: 'remera04',
        img: remera04,
        category: 'jaguar',
        type: 'remera',
        description: 'Remera 100% algodon.',
        price: 7500
      })
      server.create('product', {
        id: 11,
        name: 'remera05',
        img: remera05,
        category: 'jaguar',
        type: 'remera',
        description: 'Remera 100% algodon.',
        price: 8000
      })
      server.create('product', {
        id: 12,
        name: 'remera06',
        img: remera06,
        category: 'jaguar',
        type: 'remera',
        description: 'Remera 100% algodon.',
        price: 7500
      })
    },

    routes () {
      // PRODUCT CATEGORIES NAMESPACE
      this.namespace = 'api/products'

      // TAZAS ROUTE
      this.get('/tazas', (schema, request) => {
        return schema.products.all().filter(item => item.type === 'taza')
      })

      // REMERAS ROUTE
      this.get('/remeras', (schema, request) => {
        return schema.products.all().filter(item => item.type === 'remera')
      })

      // GENERAL PRODUCT ROUTES
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
