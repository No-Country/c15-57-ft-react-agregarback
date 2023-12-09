import BannerInfo from './BannerInfo'
import BannerOption from './BannerOption'

export default function BannerShowArea ({ setMostrar, mostrar, data, index }) {
  const isSeleccionado = mostrar === index
  return (
    <section
      onClick={() => { setMostrar(index) }}
      className={` w-full h-full z-10 flex justify-center items-center BannerShowArea
      ${isSeleccionado && 'w-[250%] bg-black bg-opacity-50'}`}
    >
      
      {!isSeleccionado
        ? (
          <BannerOption name={data.name} />
          )
        : (
          <BannerInfo data={data} />
          )}
    </section>
  )
}
