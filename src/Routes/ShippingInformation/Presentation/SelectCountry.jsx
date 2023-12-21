import { Field, ErrorMessage } from 'formik'
export default function SelectCountry () {
  const countries = [
    'Antigua y Barbuda', 'Argentina', 'Bahamas', 'Barbados', 'Belice', 'Bolivia', 'Brasil', 'Canadá', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Dominica', 'Ecuador', 'El Salvador', 'Granada', 'Guatemala', 'Guyana', 'Haití', 'Honduras', 'Jamaica', 'México', 'Nicaragua', 'Panamá', 'Paraguay', 'Perú', 'República Dominicana', 'San Cristóbal y Nieves', 'San Vicente y las Granadinas', 'Santa Lucía', 'Surinam', 'Trinidad y Tobago', 'Uruguay', 'Venezuela'
  ]

  return (
    <div className='mb-3 h-[90px] font-roboto'>
      <label htmlFor='country' className='block text-gray-700 text-sm mb-2'>País</label>
      <Field as='select' name='country' className='font-roboto shadow appearance-none border rounded w-full py-3 px-3 leading-tight text-[0.8rem] lg:text-[1rem] bg-white' id='question'>
        <option value=''>Seleccionar país</option>
        {countries.map((country, index) => {
          return <option value={country} key={index}>{country}</option>
        }
        )}
      </Field>
      <ErrorMessage name='country' component='p' className='text-red-600 text-xs italic' />
    </div>
  )
}
