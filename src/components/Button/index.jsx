export default function Button (props) {
  return (
    <>
      <div className='flex items-center justify-center'>
        <input
          type='submit'
          className={`${props.color} ${props.colorHover} text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
          value={props.text}
        />
      </div>
    </>
  )
}
