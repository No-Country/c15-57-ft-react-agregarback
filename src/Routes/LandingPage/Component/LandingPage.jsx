import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css'
import ShowMerchandise from '../Presentation/ShowMerchandise';
import AnimalsCategory from '../Presentation/AnimalsCategory';
import Banner from '../Presentation/Baner';
import {infoData } from './data'
import { voluntaryBG} from '../../../assets/img-hero'



console.log('voluntaryBG',voluntaryBG);


export default function LandingPage() {
  
  const [ animalInfo ,setAnimalInfo] = useState([]);
  const [animals , setAnimals ] = useState([]); 
  const [bannerAnimals ,  setBannerAnimals] = useState([]);
  const [mostrar, setMostrar] = useState(0);
  const classBaner = 'img-container'
 
  
  useEffect(() => {   
      axios('api/animals').then((res) => {
      setAnimalInfo(res.data.animals.slice(0,4))
      setBannerAnimals(res.data.animals.slice(0,3)) // el Banner simpre mostrara 3 animales
      }) 
  }, []);

  return (
  <>
    <Banner showAnimals ={bannerAnimals} classBaner={classBaner} setMostrar={setMostrar} mostrar={mostrar}/>
    <ShowMerchandise animalLink={animalInfo[mostrar]?.link} animalIcon={animalInfo[mostrar]?.icon}/>
    <AnimalsCategory animals={animalInfo} />  
    <InfoLanding/>  
    <VoluntaryInfo bgFondo={voluntaryBG}/>
  </>
  )
}


function InfoLanding(){
  return(
    <main>
      <div className='w-[1360px] h-[273px] bg-gray-200 mx-auto flex flex-col items-center pt-12  justify-center rounded-tr-[60px] rounded-bl-[60px] py-8 gap-8'>
        <p className='text-[30px]  w-[1080px] px-12 flex justify-center text-center'>¡Dona ahora, la supervivencia de los animales de <br/> Latinoamérica depende de todos nosotros!</p>
        <a className='w-24 h-10 bg-gray-400 rounded-[40px] flex items-center justify-center font-bold text-gray-500 ' href="#">Donar</a>
      </div>
      <div className='w-[1360px] h-[200px] flex justify-center  mx-auto mt-8 mb-12'>
        <p className='text-[28px] font-[300] w-[1080px] flex justify-center text-center'>Prevenir la extinción de los animales es un desafío global que involucra la <br/> 
        colaboración de gobiernos, organizaciones ambientales, comunidades locales y <br/>
         personas individuales. Aquí hay algunas acciones clave que se pueden tomar para <br/> 
         contribuir a la prevención de la extinción de animales:</p>
      </div>
      <PointInfo pointData={infoData} />
    </main>
  )
}

function PointInfo({pointData}){
  return(
    <section>
      {
        pointData.map((data, index)=>{
          const curretNumber = index + 1;
          const isOdd = index % 2 ===0;
          return(
            <div className={`flex ${isOdd?'flex-row':'flex-row-reverse'} gap-10 items-center w-[1080px] mx-auto`} key={index}>
              <div className='w-20 h-20 bg-green-700 rounded-full flex justify-center items-center'>
               <p className='text-white font-semibold text-[38px]'> {curretNumber} </p>
                </div>
              <div className='w-[978px] h-auto rounded-[22px] bg-green-200 py-5 px-10 my-5 flex flex-col gap-3'>
              <p className='font-bold text-lg'>{data.title}</p>
              <p className='font-[200]' >{data.information}</p>
              </div>
            </div>
          )
        } )
      }
    </section>
  )
}

function VoluntaryInfo({bgFondo}){
  return(
    <section className={`relative w-[1440px] h-[589px] mx-auto bg-rzed-300 background-img url(${bgFondo}) overflow-hidden rounded-[50px] flex justify-center items-center `}>
      {/* <img src={bgFondo} alt="voluntary's backgropund" /> */}
      <p>hola</p>
    </section>
  )
}











