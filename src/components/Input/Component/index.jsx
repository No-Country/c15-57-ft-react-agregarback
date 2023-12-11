import { Field, ErrorMessage } from 'formik'
export default function Input ({ id, name, type, placeholder, errors, value }) {
  const invalid = 'invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-500'
  const normal = 'focus:outline-none focus:shadow-outline text-gray-700 '

  return (
    <div>
      <div className='mb-4 h-[90px]'>
        <label
          className='block text-gray-700 text-sm mb-2'
          htmlFor={id}
        >
          {name}
        </label>
<<<<<<< HEAD
        <Field
          className={`shadow appearance-none border rounded w-full py-3 px-3 leading-tight
          ${errors ? invalid : normal}`}
          id={id}
          type={type}
          placeholder={placeholder}
          name={id}
          value={value || ''}
=======
        <input
          className='shadow h-[46px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          required
>>>>>>> 2e64010d91c8854379561c7309eea0a79fd903d3
        />
        <ErrorMessage name={id} component='p' className='text-red-600 text-xs italic' />
      </div>
    </div>
  )
}
