import BannerInfo from './BannerInfo'
import BannerOption from './BannerOption'

export default function BannerShowArea ({ setMostrar, mostrar, data, index }) {
  const isSeleccionado = mostrar === index
  return (
    <section
      onClick={() => { setMostrar(index) }}
      className={`absolute  w-screen  h-full z-10 flex justify-center items-center BannerShowArea
      ${isSeleccionado && 'w-[250%] bg-black bg-opacity-50'}`}
    >
      <div className=" w-[100%] h-[100px] ">
      
      {/* {!isSeleccionado
        ? (
          <BannerOption name={data.name} />
          )
        : (
          <BannerInfo data={data} />
          )} */}
      </div>
      
    </section>
  )
}
