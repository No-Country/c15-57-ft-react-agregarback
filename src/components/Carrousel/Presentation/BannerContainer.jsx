import MovileControl from "./MovileControl"
import './style.css'


export default function BannerContainer ({ children, datosMostrar, classBaner }) {
 
  return (
    <>
    <header className={`w-[430px] z-0  flex flex-col  sm:w-screen mx-auto mb-12 relative sm:flex-row ${classBaner} rounded-bl-[60px] bg-gray-400 overflow-hidden`}>
      {children}
      <figure className="h-[500px]  lg:w-[100%] lg:h-screen w-[430px]  sm:w-screen sm:h-screen overflow-hidden flex justify-center items-center">
      {datosMostrar?.img? <img className='w-[100%] h-[100%] z-0  flex-shrink-0 xl:w-full xl:h-full object-cover' src={datosMostrar?.img} alt={datosMostrar?.name} />
      : <div className="loader "></div>}
      </figure>     
    </header>
    <MovileControl />  
    </>
  )
}




