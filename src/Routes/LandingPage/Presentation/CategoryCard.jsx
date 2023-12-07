const CategoryCard = ({ animal }) => {
  return (
    <figure className='mt-[26px] w-[263px] h-[370px]'>
      <img className='w-full h-full flex-shrink-0 bg-cover bg-no-repeat category-img ' src={animal?.img} alt={animal?.name} />
    </figure>

  )
}

export default CategoryCard
