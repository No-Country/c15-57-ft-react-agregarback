import axios from "axios";
import { useEffect, useState } from "react";

const AnimalsCategory = ()=>{
  const [animals , setAnimals ] = useState([]);  
  useEffect(() => {
    axios('api/animals').then((res) => setAnimals(res.data.animals.slice(0,4)))
  }, []);
  return(
    <section className={`w-[1440px] h-[660px] flex-shrink-0 bg-cover bg-no-repeat px-[136px] pt-[86px] pb-[48px] mx-auto bg-[url('../../../../src/assets/Category-container.png')] `}>
      <div className=' m-w-[1080px] h-[630px]  mx-auto relative  z-10'>
        <div className='w-full flex flex-col items-center'>
          <p className='font-semibold text-[35px]'>Categorias por animales</p>
          <div className='flex'>
          <p>Mira todas las carateristicas </p>
          <p className='ml-4 hover:cursor-pointer hover:font-bold'>{'>'}</p>
          </div>
        </div>
      <div className='w-full m-w-[1440px] h-full flex flex-col items-center px-[30px] pt-[40px]'>
         <div className='w-full h-full flex gap-[40px]  justify-center '>
          {animals.map((animal,index)=>(
            <a className='hover:cursor-pointer' key={index} href={animal.link}>
              <div className='mt-[26px] w-[263px] h-[370px]'>
              <img className='w-full h-full flex-shrink-0 bg-cover bg-no-repeat category-img hover:border ' src={animal?.img} alt={animal?.name} />
              </div>
            </a>
          ))}
         </div>
        </div>
      </div>
    </section>
  )
};

export default  AnimalsCategory;