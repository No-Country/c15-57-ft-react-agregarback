
export default function BannerShowArea ({ setMostrar, mostrar, index }) {
  const isSeleccionado = mostrar === index
  return (
    <section
      onClick={() => { setMostrar(index) }}
      className={`absolute  w-screen  h-full z-10 flex justify-center items-center BannerShowArea
      ${isSeleccionado && 'w-[250%] bg-black bg-opacity-50'}`}
    >     
    </section>
  )
}
