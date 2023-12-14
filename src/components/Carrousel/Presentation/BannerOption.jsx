import './style.css'

export default function BannerOption ({setMostrar, name ,index }) {

  return (
    <div onClick={()=>setMostrar(index)} className='hero-cambiarSeccion  w-full h-full text-white transition duration-2000 ease-in-out hover:cursor-pointer flex justify-center items-center'>
     <div>
      <p className='w-full flex text-[72px] justify-center items-center hero-icon'>
        +
      </p>
      <p className='text-[24px] font-semibold'>{name}</p>
      </div>
    </div>
  )
}
