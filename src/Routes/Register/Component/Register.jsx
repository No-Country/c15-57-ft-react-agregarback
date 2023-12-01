// import { useState } from 'react'

// export const useFormValidation = () => {
//   const [formSend, setFormSend] = useState(false)

//   const handleSubmit = (values, resetForm) => {
//     resetForm()
//     console.log(values)
//     setFormSend(true)
//     setTimeout(() => setFormSend(false), 3000)
//   }

//   const validateForm = (values) => {
//     const errors = {}

//     // Validate name
//     if (!values.name) {
//       errors.name = 'Por favor ingresa un nombre'
//     } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
//       errors.name = 'El nombre solo puede contener letras y espacios'
//     }

//     // Validate email
//     if (!values.email) {
//       errors.email = 'Por favor ingresa un email'
//     } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
//       errors.email =
//         'El email solo puede contener letras, números, puntos, guiones y guion bajo.'
//     }

//     return errors
//   }

//   return {
//     formSend,
//     handleSubmit,
//     validateForm
//   }
// }

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const FormularioComponent = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    // Definir la validación del esquema Yup para los campos del formulario
    name: Yup.string().min(2, 'muy corto').max(20, 'Que nombre tan largo').required('El nombre es requerido'),
    email: Yup.string().email('El correo no es válido').required('El correo es requerido'),
    password: Yup.string().min(8, 'La contraseña debe contener mínimo 8 caracteres, con al menos 1 de cada: mayúscula, minúscula, número y caracter especial')
      .matches(
        /^(?=.*[a-z])/,
        'Debe contener al menos una letra en minúscula'
      )
      .matches(
        /^(?=.*[A-Z])/,
        'Debe contener al menos una letra en mayúscula'
      )
      .matches(
        /^(?=.*[0-9])/,
        'Debe contener al menos un número'
      )
      .matches(
        /^(?=.*[!@#/$%/^&/*])/,
        'Debe contener al menos un caracter especial'
      )
      .required('La contraseña es requerida')
  })

  const initialValues = {
    // Definir los valores iniciales del formulario
    name: '',
    email: '',
    password: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors }) => (
        <Form className='rounded px-8 pt-6 pb-7 mb-4'>
          {/* Campos del formulario */}
          <Input name='name' type='text' placeholder='Nombre' errors={errors} />
          <Input name='email' type='email' placeholder='Correo electrónico' errors={errors} />
          <Input name='password' type='password' placeholder='Contraseña' errors={errors} />
          {/* Botón de envío del formulario */}
          <Button text='Registrarme' color='bg-green-600' colorHover='hover:bg-green-900' />
        </Form>
      )}
    </Formik>
  )
}

export default FormularioComponent
