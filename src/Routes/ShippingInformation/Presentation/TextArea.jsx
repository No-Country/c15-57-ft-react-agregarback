import { Field } from 'formik'
export default function TextArea ({ value }) {
  const maxCharacters = 128
  return (
    <div className='mb-3 h-[140px] font-roboto'>
      <label htmlFor='textArea' className='block text-gray-700 text-sm mb-2'>Descripción adicional (opcional)</label>
      <Field as='textarea' name='textArea' className='font-roboto shadow appearance-none border rounded w-full py-3 px-3 leading-tight text-[0.8rem] lg:text-[1rem] bg-white h-[120px] resize-none' id='textArea' placeholder='Ingrese una descripción de la ubicación donde se encuentra' value={value} maxLength={maxCharacters} />
      <div className='flex justify-between'>
        <small className='text-gray-500'>Cant. máx</small>
        <small className='text-gray-500'>{`${value.length}/${maxCharacters}`}</small>
      </div>
    </div>
  )
}
