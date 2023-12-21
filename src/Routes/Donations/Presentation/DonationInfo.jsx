import { useState } from 'react'
import { InputForm, Button, InputCard, InputCCV } from '../../../components'
import osoHormiguero from '../../../assets/OsoHormiguero.png'
import DonateButton from '../../../components/DonateButton/Component'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const DonationsInfo = () => {
  const [showForm, setShowForm] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const navigate = useNavigate()

  // const [error, setError] = useState('')

  const handleButtonClick = (amount) => {
    setShowForm((prevShowForm) => !prevShowForm)
    toggleCardVisibility()
  }

  const handleSubmit = () => {
    navigate('/thanks')
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Mínimo 2 caracteres').max(25, 'Máximo 25 caracteres').required('Nombre requerido'),
    email: Yup.string().email('Email no válido').required('Email requerido'),
    country: Yup.string().required('País requerido'),
    card: Yup.number().required('Número de tarjeta requerido').max(999999999999, 'Máximo 12 caracteres'),
    date: Yup.string().max(5, 'Fecha no válida').required('Fecha requerida'),
    CCV: Yup.number().max(999, 'Número de CCV no válido').required('Número de CCV requerido')

  })

  const initialValues = {
    id: crypto.randomUUID(),
    name: '',
    email: '',
    country: '',
    card: '',
    date: '',
    CCV: ''
  }

  const toggleCardVisibility = () => {
    setShowCard(!showCard)
  }

  return (
    <div className='relative h-full'>
      <img src={osoHormiguero} alt='osoHormiguero' className='object-cover h-min-full' />
      <div className='md:absolute inset-0 flex flex-col items-center justify-center md:ml-[10%] h-[100%]'>
        <div className='md:content-center inset-0 absolut font-roboto'>
          <div className='flex flex-col md:flex-none md:relative absolute inset-0 md:inset-auto md:p-0 p-3'>
            <h2 className='relative text-[30px] md:text-2xl pr-6 pl-6 text-white font-roboto md:backdrop-blur-lg rounded-t-lg max-w-[50%] md:max-w-[32%]'>Apoya a la Vida Silvestre</h2>
          </div>
          <div className='p-6 text-infoAnimals md:text-white font-roboto backdrop-blur-lg rounded-b-lg md:max-w-[32%]'>
            <p className='text-sm leading-relaxed'>Cada donación, grande o pequeña, tiene un impacto significativo. Con tu apoyo, estamos construyendo un futuro donde las generaciones venideras puedan disfrutar de la rica biodiversidad que hace única a América Latina. ¡Únete a nosotros y sé parte del cambio positivo que nuestro planeta necesita!</p>
          </div>
          <div className='text-colorDonation font-roboto bg-white p-6 mt-2 shadow-lg md:rounded-md md:max-w-[32%] overflow-y-auto relative top-0'>
            <h2 className='text-sm text-black mb-4 font-robotoM'>Colaborá con una donación de:</h2>
            <div className='flex flex-col justify-between text-sm'>
              <div className='flex justify-center mb-2 gap-2 text-colorDonation'>
                <DonateButton text='$500' onClick={handleButtonClick} />
                <DonateButton text='$1000' onClick={handleButtonClick} />
                <DonateButton text='$2000' onClick={handleButtonClick} />
              </div>
              <div className='flex justify-center gap-2'>
                <DonateButton text='$2500' onClick={handleButtonClick} />
                <DonateButton text='$5000' onClick={handleButtonClick} />
              </div>
            </div>

            {showForm && (
              <Formik validationSchema={validationSchema} onSubmit={handleSubmit} initialValues={initialValues} className=''>
                {({ values }) => (
                  <Form className='flex flex-col  md:relative md:h-[300px] mb-5'>
                    <p className='font-robotoM text-black pt-4 pb-3'>Datos Personales</p>
                    <InputForm name='Nombre' type='text' placeholder='Ingrese nombre' id='name' value={values.name} />
                    <InputForm name='Correo electrónico' type='email' placeholder='Ingrese correo electrónico' id='email' value={values.email} />
                    <InputForm name='País' type='text' placeholder='Ingrese pais' id='country' value={values.country} />
                    <p className='font-robotoM text-black pb-3 pt-3'>Método de Pago</p>
                    <InputCard name='Número de Tarjeta' placeholder='**** **** **** ****' id='card' showCard={showCard} toggleCardVisibility={toggleCardVisibility} value={values.card} />
                    <div className='flex gap-4'>
                      <InputForm name='Fecha' type='text' placeholder='MM/YY' id='date' value={values.date} />
                      <div className='flex relative'>
                        <InputCCV name='CCV' type='text' placeholder='***' id='CCV' value={values.CCV} />
                      </div>
                    </div>
                    <Button to='/thanks' text='Hacer mi donación' color='bg-green-600' hover='hover:bg-green-900 md:mb-[10%]' />
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

export default DonationsInfo
