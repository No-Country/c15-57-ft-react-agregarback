import { Field, ErrorMessage } from 'formik'
import { CiCreditCard1, CiCreditCardOff } from 'react-icons/ci'
export default function InputCard ({ id, name, showCard, placeholder, errors, value, toggleCardVisibility }) {
  const invalid = 'invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-500'

  const normal = 'focus:outline-none focus:shadow-outline text-gray-700 '

  return (
    <div className='mb-4 h-[90px]'>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm mb-2'
          htmlFor={id}
        >
          {name}
        </label>
        <div className='relative'>
          <Field
            className={`shadow appearance-none border rounded w-full py-3 px-3 leading-tight text-[0.8rem] lg:text-[1rem] ${errors ? invalid : normal}`}
            id={id}
            type={showCard ? 'text' : 'password'}
            placeholder={placeholder}
            name={id}
            value={value || ''}
          />
          <span
            className='absolute right-5 text-neutral-600 top-[50%] transform -translate-y-1/2 cursor-pointer'
            onClick={toggleCardVisibility}
          >
            {showCard ? <CiCreditCard1 /> : <CiCreditCardOff />}
          </span>
        </div>
        <ErrorMessage name={id} component='p' className='text-red-600 text-xs italic' />
      </div>
    </div>
  )
}
