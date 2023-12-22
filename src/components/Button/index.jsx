import { Link } from 'react-router-dom'

export default function Button (props) {
  return (
    <Link to={props.to || ''} className='flex items-center justify-center mb-3'>
      <input
        type='submit'
        disabled={props.disabled || false}
        className={`${props.color} ${props.hover} disabled:bg-gray-400 cursor-pointer text-sm font-normal mt-5 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[65%]`}
        value={props.text}
      />
    </Link>
  )
}
