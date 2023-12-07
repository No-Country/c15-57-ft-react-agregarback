import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css'
import HeroInfo from '../../../components/Hero/Component/HeroInfo';
import ShowMerchandise from '../Component/ShowMerchandise';
import AnimalsCategory from '../Component/AnimalsCategory';


export default function LandingPage() {
  const location = useLocation();
  const queryParams =location.pathname.slice(1);  
  const [ animalInfo ,setAnimalInfo] = useState([]);
  useEffect(() => {   
    axios('api/animals').then((res) => {
      const info = res.data.animals.filter(animal => animal.link === queryParams);      
      if (info.length == 1){
      setAnimalInfo(info[0]);            
      }else{        
        
       // console.error('Datos no encontrados')
        //mandar al navegador a una pagina no encontrada
      } })
  }, []);

  return (
  <section>
    <header className=' h-[720px] w-[1440px] mx-auto relative flex flex-row img-container'>
      <img className='absolute z-0 w-full h-full flex-shrink-0 bg-cover bg-no-repeat  ' src={animalInfo?.img} alt={animalInfo?.name} />
      <div  className='w-[60%] h-full z-10 flex justify-center items-center transition-all ease-in-out  bg-black bg-opacity-75'> 
        <HeroInfo data={animalInfo} domine={'toDonate/'}/>
      </div>
    </header>
    <ShowMerchandise animalLink={animalInfo.link} animalIcon={animalInfo.icon}/>
    <AnimalsCategory />    
  </section>
  )
}








