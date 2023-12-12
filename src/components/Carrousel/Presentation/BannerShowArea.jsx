export default function BannerShowArea ({ setMostrar, mostrar, index }) {
  const isSeleccionado = mostrar === index
  return (
    <section
      onClick={() => { setMostrar(index) }}
      className={` w-full h-full z-10 flex justify-center items-center BannerShowArea
      ${isSeleccionado && 'w-[290%] bg-black bg-opacity-50'}`}
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
