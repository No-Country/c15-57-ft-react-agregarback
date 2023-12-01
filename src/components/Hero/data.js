import { jaguarImg, osoAnteojos, ballenasFrancas } from '../../assets/img-hero/'

export const dataHero = []

class HeroInfo {
  constructor ({ name, img, titular, detalle, link }) {
    this.name = name
    this.img = img
    this.titular = titular
    this.detalle = detalle
    this.link = link // se pasara como props al boton para enviar a la pagina directamente
  }
}

dataHero.push(
  new HeroInfo({
    name: 'JAGUAR',
    img: jaguarImg,
    titular: 'Se encuentra en la Lista Roja de las especias amenazadas',
    detalle:
      'Hoy el jaguar es una especie amenazada que ha perdido aproximadamente 50% de su hábitat histórico en todo el continente.',
    link: '/info-JAGUAR'
  })
)
dataHero.push(
  new HeroInfo({
    name: 'OSO ANTEOJOS',
    img: osoAnteojos,
    titular:
      'La deforestación son una de las principales amenazas que enfrenta.',
    detalle:
      'A pesar de ser un animal tímido que no hay registros de ataques contra humanos, Por eso, algunos campesinos los cazan para evitar que destruyan sus cultivos.',
    link: '/info-OSO'
  })
)
dataHero.push(
  new HeroInfo({
    name: 'BALLENA FRANCA',
    img: ballenasFrancas,
    titular: 'las hembras tienen sólo una cría cada tres años.',
    detalle:
      'Con sus extremidades anteriores convertidas en aletas, su gruesa capa de grasa y su capacidad para bucear, algunas a grandes profundidades.',
    link: '/info-BALLENA'
  })
)
