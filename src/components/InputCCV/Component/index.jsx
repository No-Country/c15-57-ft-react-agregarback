import { Field, ErrorMessage } from 'formik'
import { FaRegQuestionCircle } from 'react-icons/fa'

export default function InputCCV ({ id, name, type, placeholder, errors, value }) {
  const invalid = 'invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-500'
  const normal = 'focus:outline-none focus:shadow-outline text-gray-700 '

  return (
    <div>
      <div className='mb-4 h-[80px]'>
        <div className='flex flex-row justify-between'>
          <label
            className='block text-gray-700 text-sm mb-1'
            htmlFor={id}
          >
            {name}
          </label>
          <FaRegQuestionCircle />
        </div>
        <Field
          className={`font-roboto shadow appearance-none border rounded w-full py-3 px-3 leading-tight text-[0.8rem] lg:text-[1rem]
          ${errors ? invalid : normal}`}
          id={id}
          type={type}
          placeholder={placeholder}
          name={id}
          value={value || ''}
        />
        <ErrorMessage name={id} component='p' className='text-red-600 text-xs italic' />
      </div>
    </div>
  )
}
