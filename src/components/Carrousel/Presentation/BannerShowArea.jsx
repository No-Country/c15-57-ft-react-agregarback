import BannerInfo from './BannerInfo'
import BannerOption from './BannerOption'

export default function BannerShowArea ({ setMostrar, mostrar, data, index }) {
  const isSeleccionado = mostrar === index
  return (
    <section
      onClick={() => { setMostrar(index) }}
      className={` w-full h-full z-10 flex justify-center items-center transition-all transition-300 ease-in-out
     ${isSeleccionado && 'w-[270%] bg-black bg-opacity-50'}`}
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
