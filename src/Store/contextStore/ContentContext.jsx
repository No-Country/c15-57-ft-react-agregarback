import axios from 'axios'
import { createContext, useContext, useState, useEffect } from 'react'
import useGetData from '../../Hooks/useGetData'

export const ContentContext = createContext()

const ContentProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [navBarDropDown, setNavBarDropDown] = useState(false)

  // Who we are data->

  const getDataFromServer = (paramRequired) => {
    const { data } = useGetData(`api/${paramRequired}`, paramRequired)
    return { data }
  }

  // Dropdown navbar open and close handler ->

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // open and close handler for the dropdown navbar when user is authenticated->

  const openDropdown = () => {
    setNavBarDropDown(!navBarDropDown)
  }

  // Fetching data from the server ->

  const [animalInfo, setAnimalInfo] = useState([])
  const [bannerAnimals, setBannerAnimals] = useState([])
  const [mostrar, setMostrar] = useState(1)
  const classBaner = 'img-container'
  const [movileIndex, setMovileIndex] = useState(0)
  const infoData = [
    {
      title: 'Conservación de Hábitats',
      information: 'Proteger y conservar los hábitats naturales es esencial para la supervivencia de muchas especies. Esto puede implicar la creación y mantenimiento de áreas protegidas, parques nacionales y reservas naturales.'
    }, {
      title: 'Control de la Caza y Pesca Ilegal',
      information: 'Implementar medidas efectivas para prevenir la caza y pesca ilegal. Esto puede incluir el fortalecimiento de la legislación, el aumento de la aplicación de la ley y la concienciación pública sobre las consecuencias de estas prácticas.'
    }, {
      title: 'Programas de Reproducción en Cautiverio',
      information: 'Apoyar programas de reproducción en cautiverio para especies en peligro crítico. Estos programas pueden ayudar a aumentar las poblaciones y proporcionar individuos para futuras reintroducciones en la naturaleza.'
    }, {
      title: 'Educación Ambiental',
      information: 'Promover la educación ambiental para aumentar la conciencia sobre la importancia de la biodiversidad, los ecosistemas y el impacto humano en la vida silvestre. Esto puede fomentar un mayor respeto y cuidado por la naturaleza.'
    }, {
      title: 'Sostenibilidad en el Uso de Recursos Naturales',
      information: 'Fomentar prácticas sostenibles en el uso de recursos naturales, como la tala de bosques, la pesca y la agricultura. El uso responsable de los recursos es clave para mantener los ecosistemas saludables.'
    }, {
      title: 'Reducción de la Contaminación',
      information: 'Reducir la contaminación del aire, agua y suelo, ya que la contaminación puede tener efectos negativos en la salud de los animales y sus hábitats.'
    }, {
      title: 'Lucha contra el Cambio Climático',
      information: 'Contribuir a la lucha contra el cambio climático, ya que este fenómeno puede tener impactos significativos en los patrones climáticos, los hábitats y la distribución de especies.'
    }, {
      title: 'Participación en Proyectos de Conservación',
      information: 'Apoyar y participar en proyectos de conservación dirigidos por organizaciones ambientales y gubernamentales. Esto puede incluir donaciones, voluntariado o participación activa en iniciativas locales'
    }, {
      title: 'Desarrollo Sostenible:',
      information: 'Abogar por el desarrollo sostenible en comunidades locales y a nivel global. Esto implica equilibrar el desarrollo económico con la preservación de la biodiversidad y los ecosistemas.'
    }, {
      title: 'Consumo Consciente',
      information: 'Adoptar un estilo de vida de consumo consciente, eligiendo productos que sean respetuosos con el medio ambiente y no contribuyan a la degradación de hábitats naturales.'
    }
  ]
  const moreDataDonate = ` Prevenir la extinción de los animales es un desafío global que involucra la colaboración
  de gobiernos, organizaciones ambientales, comunidades locales y personas individuales.
  Aquí hay algunas acciones clave que se pueden tomar para contribuir a la prevención de  la extinción de animales:
 `

  // Router handler for the animal navbar page ->
  const onAnimalRouteChecker = () => {
    const [onAnimalRoute, setOnAnimalRoute] = useState(true)
    const location = useLocation()

    useEffect(() => {
      if (location.pathname === '/') {
        setOnAnimalRoute(true)
      } else {
        setOnAnimalRoute(false)
      }
    }, [location.pathname])

    return onAnimalRoute
  }

  //

  const fetchData = async () => {
    try {
      axios('api/animals').then((res) => {
        setAnimalInfo(res.data.animals.slice(0, 4))
        setBannerAnimals(res.data.animals.slice(0, 3))
      })
    } catch (error) {
      console.log(error)
    };
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 2000)
  }, [])

  const lefMovileIndex = (currentIndex) => {
    if (currentIndex > 0) {
      setMovileIndex(currentIndex - 1)
    }
  }
  const rightMovileIndex = (currentIndex) => {
    if (currentIndex < infoData.length - 1) {
      setMovileIndex(currentIndex + 1)
    }
  }

  // keeping total account of products
  const [totalCounting, setTotalCounting] = useState(0)
  // update the total of products
  const updateTotalCounting = (newCounting) => {
    setTotalCounting(newCounting + totalCounting)
  }

  // check the state of shipping info
  const [sentShippingInfo, setSentShippingInfo] = useState(false)

  // Get address information
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [postal, setPostal] = useState('')
  const [street, setStreet] = useState('')
  const [streetNumber, setStreetNumber] = useState('')

  // check shoppingcart button state
  const [enableButton, setEnableButton] = useState(true)

  const constextValue = {
    getDataFromServer,
    openDropdown,
    navBarDropDown,
    isOpen,
    toggle,
    onAnimalRouteChecker,
    animalInfo,
    setAnimalInfo,
    bannerAnimals,
    setBannerAnimals,
    mostrar,
    setMostrar,
    classBaner,
    infoData,
    moreDataDonate,
    movileIndex,
    rightMovileIndex,
    lefMovileIndex,
    totalCounting,
    setTotalCounting,
    updateTotalCounting,
    sentShippingInfo,
    setSentShippingInfo,
    country,
    setCountry,
    city,
    setCity,
    postal,
    setPostal,
    street,
    setStreet,
    streetNumber,
    setStreetNumber,
    enableButton,
    setEnableButton
  }

  return (

    <ContentContext.Provider value={constextValue}>
      {children}
    </ContentContext.Provider>

  )
}

export default ContentProvider

export const useContentContext = () => useContext(ContentContext)
