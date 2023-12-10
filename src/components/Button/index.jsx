export default function Button (props) {
  return (
    <>
      <div className='flex items-center justify-center mb-3'>
        <input
          type='submit'
          className={`${props.color} ${props.hover} font-normal mt-5 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline sm:w-[80%] md:w-[65%]`}
          value={props.text}
        />
      </div>
    </>
  )
}
