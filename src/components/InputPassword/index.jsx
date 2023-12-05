import { Field, ErrorMessage } from 'formik'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
export default function InputPassword ({ id, name, showPassword, placeholder, errors, value, togglePasswordVisibility }) {
  const invalid = 'invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-500'

  const normal = 'focus:outline-none focus:shadow-outline text-gray-700 '

  return (
    <div>
      <div className='mb-4 box-border h-[80px]'>
        <label
          className='block text-gray-700 text-sm mb-2'
          htmlFor={id}
        >
          {name}
        </label>
        <div className='relative'>
          <Field
            className={`shadow appearance-none border rounded w-full py-3 px-3 leading-tight
          ${errors ? invalid : normal}`}
            id={id}
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            name={id}
            value={value || ''}
          />
          <span
            className='absolute right-5 text-neutral-600 top-[50%] transform -translate-y-1/2 cursor-pointer'
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <ErrorMessage name={id} component='p' className='text-red-600 text-xs italic' />
      </div>
    </div>
  )
}
