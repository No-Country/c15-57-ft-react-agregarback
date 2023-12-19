import { LoginLogoutSectContainer } from '../Presentation/LoginLogoutSect.jsx'
const routes = [
  {
    path: '/Login',
    name: 'Login'
  },
  {
    path: '/Register',
    name: 'Register'
  }
]
export const LoginLogoutSect = () => {
  return <LoginLogoutSectContainer routes={routes} />
}
