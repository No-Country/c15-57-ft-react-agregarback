import { useEffect, useState } from 'react'
import BotonDonar from '../BotonDonar'
// import { dataHero } from './data'
import './style.css'
import BarraHero from '../BarraHero'
import axios from 'axios'

export function Hero () {
  const [mostrar, setMostrar] = useState(0)
  const [dataHero, setDataHero] = useState([])

  useEffect(() => {
    axios('api/animals')
      .then((res) => setDataHero(res.data.animals))
  }, [])

  useEffect(() => {
    const tiempoDiaPositiva = 5000
    const herointervalo = () => {
      let index = 0
      setInterval(() => {
        index++
        if (index > dataHero.length - 1) {
          index = 0
        }

        setMostrar(index)
      }, tiempoDiaPositiva)
    }
    herointervalo()
  }, [])

  const datosMostrar = dataHero[mostrar]

  return (
    <header className='hero-container'>
      <img
        style={{ backgroundImage: datosMostrar?.img }}
        className='hero-img'
        src={datosMostrar?.img}
        alt={datosMostrar?.name}
      />
      <section className='hero-sectio'>
        <div className='hero-info'>
          <div>
            <p className='hero-name'>{datosMostrar?.name}</p>
            <p className='hero-titular'>{datosMostrar?.titular}</p>
          </div>
          <p className='hero-detalle'>{datosMostrar?.detalle}</p>
          <BotonDonar link={datosMostrar?.link}>¡DONA AHORA!</BotonDonar>

          <BarraHero
            mostrar={mostrar}
            list={dataHero}
            setMostrar={setMostrar}
          />
        </div>
      </section>
    </header>
  )
}
