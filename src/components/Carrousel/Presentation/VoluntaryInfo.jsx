export default function VoluntaryInfo () {
  return (
    <section className={`relative w-[100%] max-w-[1440px] h-[549px] mx-auto my-16 bg-rzed-300
    bg-no-repeat bg-cover bg-[url('/src/assets/img-hero/voluntaryBG.jpeg')]
    overflow-hidden rounded-[50px] flex justify-center items-center mt-20  `}
    >
      <div className='absolute z-0 w-full h-full bg-black bg-opacity-70' />
      <div className='w-[820px] flex flex-col items-center gap-6'>
        <p className='text-white text-[50px] relative z-10'>Voluntariados</p>
        <p className='text-white w-[820px] h-auto text-center text-base leading-9 relative z-10 font-[200]'>Te invitamos a explorar la belleza natural de la regiónes a través de emocionantes y seguras experiencias de turismo <br />
        aventura. Nuestra gama de actividades está diseñada para satisfacer a viajeros de todas las edades y niveles de <br />  experiencia. Descubre las emocionantes opciones que tenemos para ti:
        </p>
        <div>
          <a className='text-white relative z-10 border py-3 px-4 rounded-full bg-gray-500 bg-opacity-40' href='#'>Explorar</a>
        </div>
      </div>
    </section>
  )
}
