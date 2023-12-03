import { Field, ErrorMessage } from 'formik'
export default function Input ({ id, name, type, placeholder, errors }) {
  const invalid = 'invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-500'

  const normal = 'focus:outline-none focus:shadow-outline text-gray-700 '

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
          className={`shadow appearance-none border rounded w-full py-3 px-3 leading-tight
          ${errors ? invalid : normal}`}
          id={id}
          type={type}
          placeholder={placeholder}
          name={id}
        />
        <ErrorMessage name={id} component='p' className='text-red-600 text-xs italic' />
      </div>
    </div>
  )
}
