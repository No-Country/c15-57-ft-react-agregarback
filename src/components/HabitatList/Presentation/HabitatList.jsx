import { Link } from 'react-router-dom'

export default function HabitatList ({ habitats }) {
  return (
    <section className=' flex flex-col items-center bg-[white] py-[90px]'>
      <h2 className='text-[#1E1E1E] text-4xl not-italic font-light leading-6 py-10 '>
        Explorar los animales según su habitat
      </h2>
      <div className='flex justify-center flex-row flex-wrap gap-5'>
        {habitats.map((habitat) => (
          <Link
            key={habitat.name}
            to='#'
            style={{ backgroundImage: `url(${habitat.img})` }}
            className='group h-56 w-56 rounded-full    text-white '
          >
            <div className='group-hover:bg-black/35 rounded-full h-full w-full flex text-center justify-center items-center'>
              <p className='opacity-0 group-hover:opacity-100   transition-opacity duration-300 text-center text-3xl font-bold '>
                {habitat.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
