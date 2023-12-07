export default function Input (props) {
  return (
    <div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor={props.id}
        >
          {props.name}
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          required
        />
        <p className='text-gray-600 text-xs italic'>
          {props.text}
        </p>
      </div>
    </div>
  )
}
