import '../Presentation/style.css'

export default function BarraHero({ mostrar, list, setMostrar }) {

  const mostrarUno = (index) => {
    setMostrar(index)
  }


  return (
    <div className="BarraHero">
    {
      list.map((item, index) => (

        <div
          key={index}
          onClick={() => mostrarUno(index)}
          className={`
          BarraHero-punto 
          ${mostrar == index 
            && 
            'BarraHero-punto--mostrado'
            }`
          }
        ></div>

      )
      )
      }
    </div>
  )
}
