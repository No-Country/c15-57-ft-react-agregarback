export default function BannerContainer ({ children, datosMostrar, classBaner }) {
  return (
    <header className={`w-[1440px] h-[720px] mx-auto mb-12 relative flex flex-row ${classBaner} rounded-bl-[60px] bg-gray-400 overflow-hidden`}>
      {children}
      <img className='absolute z-0 w-full h-full flex-shrink-0 bg-cover bg-no-repeat' src={datosMostrar?.img} alt={datosMostrar?.name} />
    </header>
  )
}
