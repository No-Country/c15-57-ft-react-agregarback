export default function HabitatList ({ habitats }) {
  return (
    <section className='h-[800px] flex flex-col items-center bg-[white] pt-[90px]'>
      <h2 className='text-[#1E1E1E] text-[32px] not-italic font-light leading-6 pb-[41px]'>
        Explorar los animales según su habitat
      </h2>
      <div className='flex justify-center flex-row pb-[90px]'>
        {habitats.map((habitat) => (
          <div
            key={habitat.name}
            style={{ backgroundImage: `url(${habitat.img})` }}
            className='group w-[224.273px] h-[224.273px] shrink-0 cursor-pointer flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
          >
            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-3xl not-italic font-bold leading-10'>
              {habitat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
