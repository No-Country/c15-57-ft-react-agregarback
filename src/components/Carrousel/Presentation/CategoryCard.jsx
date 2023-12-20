const CategoryCard = ({ animal }) => {
  
  
  return (
    <section className=" flex relative flex-col justify-center  items-center">
      <figure className='relative mt-[26px]  mx-1 w-[147px] sm:mx-8 sm:w-[220px] h-[280px] overflow-hidden rounded-[20px]'>
        <div className="z-10 absolute bg-black bg-opacity-50 sm:w-[220px] w-[147px] h-[280px]"> </div>
        <img className='w-full relative z-0 h-full flex-shrink-0  object-cover  bg-cover bg-no-repeat  ' src={animal?.img} alt={animal?.name} />
      </figure>      
      <p className="relative z-20 text-white  text-[15px] transform -translate-y-12">{animal?.name}</p>
    </section>
    )
}

export default CategoryCard
