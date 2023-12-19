export default function Button (props) {
  return (
    <>
      <div className='flex items-center justify-center mb-3'>
        <input
          type='submit'
          disabled={props.disabled || false}
          className={`${props.color} ${props.hover} disabled:bg-gray-800 disabled:opacity-50 text-sm font-normal mt-5 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[65%] md:w-[65%]`}
          value={props.text}
        />
      </div>
    </>
  )
}
