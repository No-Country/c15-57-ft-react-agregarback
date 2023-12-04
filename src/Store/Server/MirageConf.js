
import { createServer, Model } from 'miragejs'
import { jaguarImg, osoAnteojos, ballenasFrancas } from '../../assets/img-hero'

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
        const { username, password } = request.requestBody

        const user = schema.User.find({ username })
        if (user && user.password === password) {
          return user
        } else {
          return {
            success: false,
            message: 'Invalid username or password'
          }
        }
      })

      // Register route
      this.post('/register', (schema, request) => {
        const { username, password, name, lastName, email } =
          request.requestBody

        const user = schema.User.create({
          username,
          password,
          name,
          lastName,
          email
        })
        // CRUD
        // Fetch all users
        this.get('/', (schema, request) => {
          return schema.User.all()
        })

        // Fetch a user by ID
        this.get('/:id', (schema, request) => {
          const id = request.params.id
          const user = schema.User.find(id)

          if (user) {
            return user
          } else {
            return {
              success: false,
              message: `User with ID ${id} not found`
            }
          }
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

        return user

      })
    }
  })
}