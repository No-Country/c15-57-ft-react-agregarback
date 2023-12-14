import { lazy } from 'react'
import Store from './Store/Component/Store'

// Unprotected Routes

const WhoWeAre = lazy(() => import('./WhoWeAre/Component/WhoWeAre'))
const Animals = lazy(() => import('./Animals/Component/Animals'))
const Login = lazy(() => import('./Login/Component/Login'))
const NotFound = lazy(() => import('./NotFound/Component/NotFound'))
const Register = lazy(() => import('./Register/Component/Register'))
const VulnerableSpecies = lazy(() => import('./VulnerableSpecies/Component/VulnerableSpecies'))
const ResetPassword = lazy(() => import('./ResetPassword/Component/ResetPassword'))
<<<<<<< HEAD
const ShippingInformation = lazy(() => import('./ShippingInformation/Component/ShippingInformation'))
const ShoppingCart = lazy(() => import('./ShoppingCart/Component/ShoppingCart'))
=======
const Donations = lazy(() => import('./Donations/Component/Donations'))

>>>>>>> e413de32a02c34244504966823d6dea4b20fd9b0
// Protected Routes

const User = lazy(() => import('./User/Container/User'))
const MyVolunteers = lazy(() => import('./MyPurchases/Container/MyPurchases'))
const MyPurchases = lazy(() => import('./MyPurchases/Container/MyPurchases'))

<<<<<<< HEAD
export { Animals, WhoWeAre, VulnerableSpecies, Login, NotFound, Register, Store, User, MyVolunteers, MyPurchases, ResetPassword, ShippingInformation, ShoppingCart }
=======
export { Animals, WhoWeAre, VulnerableSpecies, Login, NotFound, Register, Store, User, MyVolunteers, Donations, MyPurchases, ResetPassword }
>>>>>>> e413de32a02c34244504966823d6dea4b20fd9b0
