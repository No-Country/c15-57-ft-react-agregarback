export default function DonateButton ({ text, onClick }) {
  return (
    <div>
      <button
        className='hover:bg-green-900 hover:text-white hover:border-green-900 border-colorDonation font-bold py-2 px-4 rounded-md border-2 mb-2'
        onClick={() => onClick(text)}
      >
        {text}
      </button>
    </div>
  )
}
