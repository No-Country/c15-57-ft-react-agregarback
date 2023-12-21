import { lazy } from 'react'
// Unprotected Routes
const Animals = lazy(() => import('./Animals/Component/Animals'))
const WhoWeAre = lazy(() => import('./WhoWeAre/Component/WhoWeAre'))
const VulnerableSpecies = lazy(() => import('./VulnerableSpecies/Component/VulnerableSpecies'))
const Donations = lazy(() => import('./Donations/Component/Donations'))
const Thanks = lazy(() => import('./Thanks/Component/Thanks'))
const Store = lazy(() => import('./Store/Component/Store'))
const Register = lazy(() => import('./Register/Component/Register'))
const Login = lazy(() => import('./Login/Component/Login'))
const ShippingInformation = lazy(() => import('./ShippingInformation/Component/ShippingInformation'))
const ResetPassword = lazy(() => import('./ResetPassword/Component/ResetPassword'))
const ShoppingCart = lazy(() => import('./ShoppingCart/Component/ShoppingCart'))
const InfoAnimals = lazy(() => import('./InfoAnimals/Component/InfoAnimals'))
const EcosystemPage = lazy(() => import('./AnimalsEcosystem/Componets/EcosystemPage'))
const ShoppingSuccessful = lazy(() => import('./ShoppingSuccessful/Component/ShoppingSuccessful'))

const NotFound = lazy(() => import('./NotFound/Component/NotFound'))
// Protected Routes
const User = lazy(() => import('./User/Container/User'))
const MyVolunteers = lazy(() => import('./MyPurchases/Container/MyPurchases'))
const MyPurchases = lazy(() => import('./MyPurchases/Container/MyPurchases'))

export {
  Animals,
  WhoWeAre,
  VulnerableSpecies,
  Donations,
  Thanks,
  Store,
  Register,
  Login,
  ShippingInformation,
  ResetPassword,
  ShoppingCart,
  InfoAnimals,
  EcosystemPage,
  ShoppingSuccessful,
  User,
  MyVolunteers,
  MyPurchases,
  NotFound,
}
