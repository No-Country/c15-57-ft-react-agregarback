import React from 'react';

import { useContaintContext } from "../../../Store/contextStore/ContentContext"

import BotonDonar from '../BotonDonar/Component/BotonDonar';
import BarraHero from '../BarraHero/Component/BarraHero';

const CarrouselItems = () => {

  const { datosMostrar, dataHero, mostrar, setMostrar } = useContaintContext();

  return (
    <div>
      <img
        style={{ backgroundImage: datosMostrar?.img }}
        className="hero-img"
        src={datosMostrar?.img}
        alt={datosMostrar?.name}
      />
      <section className="hero-section">
        <div className="hero-info">
          <div>
            <p className="hero-name">{datosMostrar?.name}</p>
            <p className="hero-titular">{datosMostrar?.titular}</p>
          </div>
          <p className="hero-detalle">{datosMostrar?.detalle}</p>
          <BotonDonar link={datosMostrar?.link}>¡DONA AHORA!</BotonDonar>
          <BarraHero mostrar={mostrar} list={dataHero} setMostrar={setMostrar} /> // EL RENDERIZADO DE ESTA LISTA NO SE REALIZA CORRECTAMENTE
        </div>
      </section>
    </div>

  );
};

export default CarrouselItems;
