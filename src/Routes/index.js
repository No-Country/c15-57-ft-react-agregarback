import { lazy } from "react";

// Unprotected Routes  

const Donations = lazy(() => import("./Donations/Component/Donations"));
const Animals = lazy(() => import("./Animals/Component/Animals"));
const Login = lazy(() => import("./Login/Component/Login"));
const NotFound = lazy(() => import("./NotFound/Component/NotFound"));
const Register = lazy(() => import("./Register/Presentation/Register"));
const Volunteers = lazy(() => import("./Volunteers/Component/Volunteers"))
// Protected Routes

const User = lazy(() => import("./User/Container/User"))
const MyVolunteers = lazy(() => import("./MyPurchases/Container/MyPurchases"))
const MyPurchases = lazy(() => import("./MyPurchases/Container/MyPurchases"))

import Store from "./Store/Component/Store"

export  {Animals, Donations, Volunteers, Login, NotFound, Register, Store, User, MyVolunteers, MyPurchases} 