export default function Button ({ color, hover, text }) {
  return (
    <>
      <div className='flex items-center justify-center mb-3'>
        <input
          type='submit'
<<<<<<< HEAD
          className={`${color}  ${hover} w-[55%] text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
          value={text}
=======
          className={`${props.color} ${props.hover} font-normal w-[55%] mt-5 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
          value={props.text}
>>>>>>> 2a6bf0a2120c7a12c38e897a696b29e1acd45842
        />
      </div>
    </>
  )
}
