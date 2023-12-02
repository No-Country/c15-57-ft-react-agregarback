export default function Button ({ color, hover, text }) {
  return (
    <>
      <div className='flex items-center justify-center mb-3'>
        <input
          type='submit'
          className={`${color}  ${hover} w-[55%] text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
          value={text}
        />
      </div>
    </>
  )
}
