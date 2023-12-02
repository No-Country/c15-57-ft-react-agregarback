import { Input, Button } from '../../../components/'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const FormularioComponent = () => {
  const onSubmit = (values) => {
    console.log(values)
  }
  const validationSchema = Yup.object().shape({
    // Definir la validación del esquema Yup para los campos del formulario
    name: Yup.string().min(2, 'muy corto').max(20, 'Que nombre tan largo').required('El nombre es requerido'),
    email: Yup.string().email('El correo no es válido').required('El correo es requerido'),
    password: Yup.string().min(8, 'La contraseña debe tener mínimo 8 caracteres')
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
        <Form className='rounded px-8 pt-2  mb-4 w-full'>
          {/* Campos del formulario */}
          <Input name='Nombre' type='text' placeholder='Nombre' errors={errors} id='name' />
          <Input name='Correo electrónico' type='email' placeholder='Correo electrónico' errors={errors} id='email' />
          <Input name='Contraseña' type='password' placeholder='Contraseña' errors={errors} id='password' />
          {/* Botón de envío del formulario */}
          <Button text='Registrarme' color='bg-green-600' hover='hover:bg-green-900' />
        </Form>
      )}
    </Formik>
  )
}

export default FormularioComponent
