import { Field, ErrorMessage } from 'formik'

export default function Input ({ id, name, type, placeholder, text, errors }) {
  return (
    <div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm mb-2'
          htmlFor={id}
        >
          {name}
        </label>
        <Field
          className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
          invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-500'
          id={id}
          type={type}
          placeholder={placeholder}
          name={id}
        />
        {errors ? <ErrorMessage name={id} component='p' className='text-red-600 text-xs italic' /> : <p className='text-gray-600 text-xs italic'>{text}</p>}
      </div>
    </div>
  )
}
