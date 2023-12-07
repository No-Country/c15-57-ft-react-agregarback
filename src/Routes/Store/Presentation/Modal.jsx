export default function Modal ({ children, onClose }) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-4 rounded-lg shadow-md relative'>
        <button className='absolute top-2 right-2 pr-2 text-xl font-semibold text-gray-500 hover:text-gray-700' onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}
