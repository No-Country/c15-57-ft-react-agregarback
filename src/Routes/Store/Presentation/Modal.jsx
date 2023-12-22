export default function Modal ({ children, onClose }) {
  return (
    <div className='z-[200] fixed sm:w-[1080px] sm:h-[700px] w-[98vw] h-[93vh] inset-x-50 inset-y-5 flex  align-middle justify-center'>
      <div className='bg-white p-4 rounded-lg w-[95%] shadow-md relative'>
        <button className='absolute top-2 right-2 pr-2 text-xl font-semibold text-gray-500 hover:text-gray-700' onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}
