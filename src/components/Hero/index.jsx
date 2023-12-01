import {  useState } from "react";
import BotonDonar from "../BotonDonar"
import { dataHero } from "./data"
 import './style.css'


const Hero = () =>{
  let [mostrar, setMostrar]= useState(0);
  const datosMostrar = dataHero[mostrar];

  return (
  <header  className="w-[1440px] h-[720px] relative flex flex-row" >
    {dataHero.map((animals , index)=>( 
        <HeroSecction setMostrar={setMostrar} mostrar={mostrar} key={index} index={index} data={animals}/>
        ))}
    <div   className={`bg-[url('${datosMostrar.img}')] absolute z-0 w-full h-full flex-shrink-0 bg-cover bg-no-repeat  `}>
    </div>
  </header>
)}

const HeroSecction = ({setMostrar,mostrar,data,index})=>{
  const isSeleccionado = mostrar == index;
  return(
    <section onClick={()=>{setMostrar(index)}} className={` w-full h-full z-10 flex justify-center items-center transition-all ease-in-out
     ${isSeleccionado && 'w-[180%] bg-black bg-opacity-75'}`}>
      {!isSeleccionado?
      <HeroOption name={data.name}/>:
      <HeroInfo  data={data}/> }
    </section>
  )
}
const HeroOption = ({name})=>{
  return( 
    <div className='hero-cambiarSeccion text-white transition duration-2000 ease-in-out hover:cursor-pointer'>
      <p className="w-full flex text-[72px] justify-center items-center hero-icon" >+</p>
      <p className="text-[24px] font-semibold" >{name}</p>
    </div>)
}

const HeroInfo = ({ data})=>{
  return(
    <div className={`hero-info  w-[460px] h-[410px] flex flex-col gap-4 relative `}>
      <div>
        <p className="text-teal-300 font-semibold text-[20px]">{data.name}</p>
        <p className="text-[48px] text-white leading-none font-semibold">{data.titular}</p>
      </div>
      <p className="w-[450px] text-white text-base">{data.detalle}</p>
      <BotonDonar link ={data.link}>¡DONA AHORA!</BotonDonar>
      </div>
  )
}

export default Hero;