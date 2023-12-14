import { Field, ErrorMessage } from 'formik'
export default function InputSelectForm ({ values }) {
  return (
    <div className='mb-3 h-[90px] font-roboto'>
      <label htmlFor='question' className='block text-gray-700 text-sm mb-2'>Pregunta secreta</label>
      <Field as='select' value={values || ''} name='question' className='font-roboto shadow appearance-none border rounded w-full py-3 px-3 leading-tight text-[0.8rem] lg:text-[1rem] bg-white' id='question'>
        <option value=''>Seleccione una pregunta secreta</option>
        <option value='opcion1'>¿Cuál es el nombre de tu mascota?</option>
        <option value='opcion2'>¿En qué ciudad naciste?</option>
        <option value='opcion3'>¿Cuál es tu comida favorita?</option>
      </Field>
      <ErrorMessage name='question' component='p' className='text-red-600 text-xs italic' />
    </div>
  )
}
