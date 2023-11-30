import './style.css'

const BarraHero = ({mostrar,list , setMostrar}) =>{

  const mostrarUno = (index) =>{
    setMostrar(index);
  }

  return (
    <section className="BarraHero">
      {
        list.map((item , index)=>(
          <div onClick={()=>mostrarUno(index)}  className={`BarraHero-punto ${mostrar == index && 'BarraHero-punto--mostrado'}`} key={index}></div>
        ))
      }
    </section>
)}

export default BarraHero