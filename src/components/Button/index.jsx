export default function Button (props) {
  return (
    <>
      <div className='flex items-center justify-center mb-3'>
        <input
          type='submit'
          className={`${props.color} w-[55%] mt-5 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
          value={props.text}
        />
      </div>
    </>
  )
}
