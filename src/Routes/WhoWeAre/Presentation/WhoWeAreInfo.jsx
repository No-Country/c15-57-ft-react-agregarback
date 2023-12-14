import React from 'react'
const WhoWeAreInfo = ({ info }) => {

const DonationsInfo = () => {
  const [showForm, setShowForm] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState('')
  const [showCard, setShowCard] = useState(false)

  // const [error, setError] = useState('')

  const handleButtonClick = (amount) => {
    setSelectedAmount(amount)
    setShowForm((prevShowForm) => !prevShowForm)
    toggleCardVisibility()
  }

  const handleSubmit = () => {
    alert(`Donación realizada por:${selectedAmount}!! Muchas Gracias!!`)

    setShowForm(false)
    setSelectedAmount('')
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Mínimo 2 caracteres').max(25, 'Máximo 25 caracteres').required('Nombre requerido'),
    email: Yup.string().email('Email no válido').required('Email requerido'),
    country: Yup.string().required('País requerido'),
    card: Yup.number('Sólo números').required('Número de tarjeta requerido'),
    CCV: Yup.number().max(4, 'Número de CCV no válido').required('Número de CCV requerido')
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
    <div className='relative bg h-full '>
      <img src={osoHormiguero} alt='Jaguarete' className='min-h-screen bg-fixed bg-cover ' />
      <div className='absolute inset-0 flex flex-col items-center justify-center ml-[10%]'>
        <div className='content-center relative'>
          <div className='p-6 text-white font-roboto backdrop-blur-lg shadow-lg rounded-md max-w-[32%] '>
            <h2 className='text-2xl mb-4'>Apoya a la Vida Silvestre</h2>
            <p className='text-sm'>Cada donación, grande o pequeña, tiene un impacto significativo. Con tu apoyo, estamos construyendo un futuro donde las generaciones venideras puedan disfrutar de la rica biodiversidad que hace única a América Latina. ¡Únete a nosotros y sé parte del cambio positivo que nuestro planeta necesita!</p>
          </div>
          <div className='text-colorDonation font-roboto bg-white p-6 mt-2 shadow-lg rounded-md max-w-[32%] h-[fit-content] overflow-y-auto sticky top-0'>
            <h2 className='text-sm text-black mb-4 font-robotoM'>Colaborá con una donación de:</h2>

            <div className='flex flex-col justify-between text-sm'>
              <div className='flex justify-center mb-2 gap-2 text-colorDonation'>
                {/* Tres botones arriba */}
                <DonateButton text='$500' onClick={handleButtonClick} />
                <DonateButton text='$1000' onClick={handleButtonClick} />
                <DonateButton text='$2000' onClick={handleButtonClick} />
              </div>
              <div className='flex justify-center gap-2'>
                <DonateButton text='$2500' onClick={handleButtonClick} />
                <DonateButton text='Otro importe' onClick={handleButtonClick} />
              </div>
            </div>

            {showForm && (
              <Formik validationSchema={validationSchema} onSubmit={handleSubmit} initialValues={initialValues}>
                {({ values }) => (
                  <Form>
                    <InputForm name='Nombre' type='text' placeholder='Ingrese nombre' id='name' value={values.name} />
                    <InputForm name='Correo electrónico' type='email' placeholder='Ingrese correo electrónico' id='email' value={values.email} />
                    <InputForm name='País' type='text' placeholder='Ingrese pais' id='country' value={values.country} />
                    <p className='font-robotoM text-black'>Método de Pago</p>
                    <InputCard name='Número de Tarjeta' placeholder='**** **** **** ****' id='card' showCard={showCard} toggleCardVisibility={toggleCardVisibility} value={values.card} />
                    <div className='flex gap-4'>
                      <InputForm name='Fecha' type='text' placeholder='MM/YY' id='date' value={values.date} />
                      <div className='flex relative'>
                        <InputCCV name='CCV' type='text' placeholder='***' id='CCV' value={values.CCV} />
                      </div>

                    </div>
                    <Button text='Donar' color='bg-green-600' hover='hover:bg-green-900' />
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

<<<<<<< HEAD:src/Routes/Donations/Presentation/DonationsInfo.jsx
export default DonationsInfo
=======
export default WhoWeAreInfo
>>>>>>> 26729d6ede7f36270a5a92b1125dab68287a6022:src/Routes/WhoWeAre/Presentation/WhoWeAreInfo.jsx
