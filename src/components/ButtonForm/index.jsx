export default function ButtonForm (props) {
  return (
    <input
      type='submit'
      disabled={props.disabled || false}
      className={`${props.color} ${props.hover} disabled:bg-gray-400 cursor-pointer text-sm font-normal mt-5 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[70%]`}
      value={props.text}
    />
  )
}
