import { Formik, Form } from 'formik'
import { InputForm, Button } from '../../../components/'
import SelectCountry from './SelectCountry'
import TextArea from './TextArea'
import * as Yup from 'yup'
// import { useState } from 'react'
// import axios from 'axios'

const ShippingInformationForm = () => {
  // const [userEmail, setUserEmail] = useState(false)
  // const [selectedQuestion, setSelectedQuestion] = useState('')
  // const [recoverPassword, setRecoverPassword] = useState('')
  // const [error, setError] = useState('')

  const onSubmitPassword = async (values) => {
    // try {
    //   const response = await axios.post('/api/users/check-question', values)
    //   setError('')
    //   if (response.data.error) {
    //     setError('password', { message: response.data.error })
    //   } else {
    //     setSelectedQuestion(response.data.question)
    //     setUserEmail(response.data.email)
    //   }
    // } catch (error) {
    //   if (error.response.status === 400 && error.response.data.error === 'Correo o contraseña invalida') {
    //     setError('Error dato no encontrado')
    //   } else {
    //     setError('Error correo no encontrado')
    //   }
    // }
  }

  const validationSchema = Yup.object().shape({
    country: Yup.string().required('El país es requerido'),
    postal: Yup.number().required('El código postal es requerido'),
    email: Yup.string().email('El correo no es válido').required('El correo es requerido'),
    state: Yup.string().required('La provincia es requerida'),
    location: Yup.string().required('La localidad es requerida'),
    street: Yup.string().required('La calle o avenida es requerida'),
    number: Yup.number().required('El número es requerido'),
    phone: Yup.number().required('El número de teléfono es requerido')
  })

  return (
    <>
      <Formik
        initialValues={{ email: '', country: '', postal: null, state: '', location: '', street: '', number: null, floor: '', street1: '', street2: '', phone: null, textArea: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmitPassword}
      >
        {({ errors, values, handleChange }) => (
          <Form className='rounded pt-6 mx-2 max-w-[662px] md:mt-[48px] md:pt-0'>
            {/* Campos del formulario */}
            <div className='md:flex md:gap-6'>
              <SelectCountry />
              <InputForm name='Código postal' onChange={handleChange} type='number' placeholder='Ingrese código postal' errors={errors} id='postal' value={values.postal} />
            </div>
            <div className='md:flex md:gap-6'>
              <InputForm name='Provincia/Estado' onChange={handleChange} type='text' placeholder='Ingrese provincia' errors={errors} id='state' value={values.state} />
              <InputForm name='Localidad' onChange={handleChange} type='text' placeholder='Ingrese localidad' errors={errors} id='location' value={values.location} />
            </div>
            <div className='md:flex md:gap-6'>
              <InputForm name='Calle/Avenida' onChange={handleChange} type='text' placeholder='Ingrese calle/avenida' errors={errors} id='street' value={values.street} />
              <InputForm name='Número' onChange={handleChange} type='number' placeholder='Ingrese número' errors={errors} id='number' value={values.number} />
            </div>
            <div className='md:w-[50%]'>
              <InputForm name='Piso/Departamento (opcional)' onChange={handleChange} type='text' placeholder='Ingrese piso o departamento' errors={errors} id='floor' value={values.floor} />
            </div>
            <h2 className='block text-gray-700 text-sm my-5 font-semibold text-center md:text-left md:my-3'>
              ¿Entre qué calles se encuentra? (opcional)
            </h2>
            <div className='md:flex md:gap-6'>
              <InputForm name='Calle 1' onChange={handleChange} type='text' placeholder='Ingrese calle 1' errors={errors} id='street1' value={values.street1} />
              <InputForm name='Calle 2' onChange={handleChange} type='text' placeholder='Ingrese calle 2' errors={errors} id='street2' value={values.street2} />
            </div>
            <div className='md:flex md:gap-6'>
              <InputForm name='Teléfono de contacto' onChange={handleChange} type='phone' placeholder='Ingrese teléfono' errors={errors} id='phone' value={values.phone} />
            </div>
            <TextArea value={values.textArea} />
            <div className='md:mt-[84px] md:mb-[36px]'>
              <Button text='Cargar datos' color='bg-green-600' hover='hover:bg-green-900' />
              {/* {error && <p className='text-red-600 text-xs italic text-center'>{error}</p>} */}
            </div>
          </Form>
        )}
      </Formik>

    </>
  )
}

export default ShippingInformationForm
