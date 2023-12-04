import { createServer, Model } from 'miragejs'
import { gorras, remeras, tazas, vasos } from '../../assets/products'

export function productCmakeServer () {
  return createServer({
    models: {
      productC: Model
    },
    seeds (server) {
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
    },

    routes () {
      // PRODUCT CATEGORIES NAMESPACE

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
    }
  })
}
