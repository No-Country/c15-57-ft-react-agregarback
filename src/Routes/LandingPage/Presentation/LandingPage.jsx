import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css'
import HeroInfo from '../../../components/Hero/Component/HeroInfo';
import BotonDonar from '../../../components/BotonDonar';


export default function LandingPage() {
  const location = useLocation();
  const queryParams =location.pathname.slice(1);
  const [ animalInfo ,setAnimalInfo] = useState([]);
 

  useEffect(() => {
    axios('api/animals').then((res) => {
      const info = res.data.animals.filter(animal => animal.link === queryParams);
      if (info.length == 1){
      setAnimalInfo(info[0]);
      console.log('info',info[0]);
      
      }else{
        console.error('Datos no encontrados')
      } })
  }, [])

  return (
  <section>
    <header className='w-screen h-screen min-w-[1080px] relative flex flex-row img-container'>
      <img className='absolute z-0 w-full h-full flex-shrink-0 bg-cover bg-no-repeat  ' src={animalInfo?.imgw} alt={animalInfo?.name} />
      <div  className='w-[60%] h-full z-10 flex justify-center items-center transition-all ease-in-out  bg-black bg-opacity-75'> 
        <HeroInfo data={animalInfo} donar={true}/>
      </div>
    </header>
    <ShowMerchandise/>
  </section>
  )
}

const ShowMerchandise = () =>{
  const linkMerchandise = '/to-Productos'

  return (
<section className=' w-full h-[630px] bg-red-200 m-[75px] flex pt-[142px] '>
  <div className='relative'>
    <p className='text-green-600 font-josefin-sans text-6xl font-normal'>¡Conseguí algunos de estos productos <br/>
    <span className='text-black font-josefin-sans text-6xl font-normal'>y ayuda a los animales! </span></p>
  <BotonDonar link={linkMerchandise}>Ver productos.</BotonDonar>
  </div>

</section>
)}



