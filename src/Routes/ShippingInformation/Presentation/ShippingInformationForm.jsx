import { Formik, Form } from 'formik'
import { InputForm, ButtonForm } from '../../../components/'
import SelectCountry from './SelectCountry'
import TextArea from './TextArea'
import * as Yup from 'yup'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
import { useNavigate } from 'react-router-dom'

const ShippingInformationForm = () => {
  const { phone, setPhone, setSentShippingInfo, state, street, streetNumber, setState, country, setCountry, city, setCity, postal, setPostal, setStreet, setStreetNumber } = useContentContext()
  const navigate = useNavigate()

  const onSubmitInfo = async (values) => {
    try {
      const response = values
      if (!response) {
        console.log(`los valores son: ${response}`)
      } else {
        setSentShippingInfo(true)
        navigate('/ShoppingCart')
        window.scrollTo(0, 0)
        setCountry(response.country)
        setState(response.state)
        setPhone(response.phone)
        setCity(response.location)
        setPostal(response.postal)
        setStreet(response.street)
        setStreetNumber(response.number)
      }
    } catch (error) {
      if (error.response.status === 400 && error.response.data.error === 'datos no válidos') {
        console.log('Error dato no encontrado')
      } else {
        console.log('Error envio no valido')
      }
    }
  }

  const validationSchema = Yup.object().shape({
    country: Yup.string().required('El país es requerido'),
    postal: Yup.number().min(0, 'el número no puede ser menor a cero').required('El código postal es requerido'),
    state: Yup.string().required('La provincia es requerida'),
    location: Yup.string().required('La localidad es requerida'),
    street: Yup.string().required('La calle o avenida es requerida'),
    number: Yup.number().min(0, 'el número no puede ser menor a cero').required('El número es requerido'),
    phone: Yup.number().required('El número de teléfono es requerido')
  })

  const initialValues = {
    // Definir los valores iniciales del formulario
    country: country ?? '',
    postal: postal ?? null,
    state: state ?? '',
    location: city ?? '',
    street: street ?? '',
    number: streetNumber ?? null,
    floor: '',
    street1: '',
    street2: '',
    phone: phone ?? null,
    textArea: ''
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitInfo}
      >
        {({ errors, values }) => (
          <Form className='rounded pt-6 mx-2 max-w-[662px] md:mt-[48px] md:pt-0'>
            {/* Campos del formulario */}
            <div className='md:flex md:gap-6'>
              <SelectCountry />
              <InputForm name='Código postal' type='number' placeholder='Ingrese código postal' errors={errors} id='postal' value={values.postal} />
            </div>
            <div className='md:flex md:gap-6'>
              <InputForm name='Provincia/Estado' type='text' placeholder='Ingrese provincia' errors={errors} id='state' value={values.state} />
              <InputForm name='Localidad' type='text' placeholder='Ingrese localidad' errors={errors} id='location' value={values.location} />
            </div>
            <div className='md:flex md:gap-6'>
              <InputForm name='Calle/Avenida' type='text' placeholder='Ingrese calle/avenida' errors={errors} id='street' value={values.street} />
              <InputForm name='Número' type='number' placeholder='Ingrese número' errors={errors} id='number' value={values.number} />
            </div>
            <div className='md:w-[50%]'>
              <InputForm name='Piso/Departamento (opcional)' type='text' placeholder='Ingrese piso o departamento' errors={errors} id='floor' value={values.floor} />
            </div>
            <h2 className='block text-gray-700 text-sm my-5 font-semibold text-center md:text-left md:my-3'>
              ¿Entre qué calles se encuentra? (opcional)
            </h2>
            <div className='md:flex md:gap-6'>
              <InputForm name='Calle 1' type='text' placeholder='Ingrese calle 1' errors={errors} id='street1' value={values.street1} />
              <InputForm name='Calle 2' type='text' placeholder='Ingrese calle 2' errors={errors} id='street2' value={values.street2} />
            </div>
            <div className='md:flex md:gap-6'>
              <InputForm name='Teléfono de contacto' type='phone' placeholder='Ingrese teléfono' errors={errors} id='phone' value={values.phone} />
            </div>
            <TextArea value={values.textArea} />
            <div className='my-10 md:mt-[40px] md:mb-10 md:w-[100%]'>
              <div className='flex flex-col items-center'>
                <ButtonForm text='Cargar datos' color='bg-green-600' hover='hover:bg-green-900' />
                {/* {error && <p className='text-red-600 text-xs italic text-center'>{error}</p>} */}
              </div>
            </div>
          </Form>
        )}
      </Formik>

    </>
  )
}

export default ShippingInformationForm
