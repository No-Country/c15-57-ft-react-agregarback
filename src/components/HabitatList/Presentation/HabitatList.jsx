import { Link } from 'react-router-dom'

export default function HabitatList ({ habitats }) {
  return (
    <section className=' flex flex-col items-center bg-[white] py-[90px]'>
      <h2 className='text-[#1E1E1E] text-[32px] not-italic font-light leading-6 py-5 '>
        Explorar los animales según su habitat
      </h2>
      <div className='flex justify-center flex-row '>
        {habitats.map((habitat) => (
          <Link
            to='#'
            key={habitat.name}
            style={{ backgroundImage: `url(${habitat.img})` }}
            className='group md:w-[224.273px] md:h-[224.273px] md:rounded-full shrink-0 flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
          >
            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-3xl not-italic font-bold leading-10'>
              {habitat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
