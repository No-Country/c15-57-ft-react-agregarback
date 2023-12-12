import { lazy } from 'react'
import Store from './Store/Component/Store'

// Unprotected Routes

const Donations = lazy(() => import('./Donations/Component/Donations'))
const Animals = lazy(() => import('./Animals/Component/Animals'))
const Login = lazy(() => import('./Login/Component/Login'))
const NotFound = lazy(() => import('./NotFound/Component/NotFound'))
const Register = lazy(() => import('./Register/Component/Register'))
const Volunteers = lazy(() => import('./Volunteers/Component/Volunteers'))
const ResetPassword = lazy(() => import('./ResetPassword/Component/ResetPassword'))

// Protected Routes

const User = lazy(() => import('./User/Container/User'))
const MyVolunteers = lazy(() => import('./MyPurchases/Container/MyPurchases'))
const MyPurchases = lazy(() => import('./MyPurchases/Container/MyPurchases'))

export { Animals, Donations, Volunteers, Login, NotFound, Register, Store, User, MyVolunteers, MyPurchases, ResetPassword }