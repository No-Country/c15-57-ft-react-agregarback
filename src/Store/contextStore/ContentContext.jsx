import { createContext, useContext, useState } from 'react'
import useGetData from '../../Hooks/useGetData'
import { useLocalStorage } from '../../components/Hooks/useStorage'
import useWindowReader from '../../Hooks/useWindowReader'

export const ContentContext = createContext()

const ContentProvider = ({ children }) => {
  
  // open and close handler for the navbar ->
  const [isOpen, setIsOpen] = useState(false) 
  
  const { windowSize } = useWindowReader()

  const closeDropDown = () => {
    windowSize[0] < 767 && (
        console.log('clicked'),
        setIsOpen(false),
        openDropdown())
}

  // open and close handler for the dropdown navbar when user is authenticated->
  const [navBarDropDown, setNavBarDropDown] = useState(false)
  
  // Dropdown navbar open and close handler ->
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  // open and close handler for the dropdown navbar when user is authenticated->
  const openDropdown = () => {
    setNavBarDropDown(!navBarDropDown)
  }
  
  const [mostrar, setMostrar] = useState(1)
  const [movileIndex, setMovileIndex] = useState(0)
  // keeping total account of products
  const [totalCounting, setTotalCounting] = useState(0)
  // check the state of shipping info
  const [sentShippingInfo, setSentShippingInfo] = useLocalStorage('sentShippingInfo', false)
  // Get address information
  const [country, setCountry] = useLocalStorage('country', '')
  const [city, setCity] = useLocalStorage('city', '')
  const [state, setState] = useLocalStorage('state', '')
  const [postal, setPostal] = useLocalStorage('postal', '')
  const [street, setStreet] = useLocalStorage('street', '')
  const [phone, setPhone] = useLocalStorage('phone', '')
  const [streetNumber, setStreetNumber] = useLocalStorage('streetNumber', '')
  // check shoppingcart button LocaluseLocalStorage
  const [enableButton, setEnableButton] = useLocalStorage('enableButton', true)

  // Who we are data->
  const getDataFromServer = (paramRequired) => {
    const { data, loading } = useGetData(`api/${paramRequired}`, paramRequired)
    return { data, loading }
  }


  // Fetching data from the server ->
  const classBaner = 'img-container'
  const infoData = [
    {
      title: 'Conservación de Hábitats',
      information: 'Proteger y conservar los hábitats naturales es esencial para la supervivencia de muchas especies. Esto puede implicar la creación y mantenimiento de áreas protegidas, parques nacionales y reservas naturales.'
    },
    {
      title: 'Control de la Caza y Pesca Ilegal',
      information: 'Implementar medidas efectivas para prevenir la caza y pesca ilegal. Esto puede incluir el fortalecimiento de la legislación, el aumento de la aplicación de la ley y la concienciación pública sobre las consecuencias de estas prácticas.'
    },
    {
      title: 'Programas de Reproducción en Cautiverio',
      information: 'Apoyar programas de reproducción en cautiverio para especies en peligro crítico. Estos programas pueden ayudar a aumentar las poblaciones y proporcionar individuos para futuras reintroducciones en la naturaleza.'
    },
    {
      title: 'Educación Ambiental',
      information: 'Promover la educación ambiental para aumentar la conciencia sobre la importancia de la biodiversidad, los ecosistemas y el impacto humano en la vida silvestre. Esto puede fomentar un mayor respeto y cuidado por la naturaleza.'
    },
    {
      title: 'Sostenibilidad en el Uso de Recursos Naturales',
      information: 'Fomentar prácticas sostenibles en el uso de recursos naturales, como la tala de bosques, la pesca y la agricultura. El uso responsable de los recursos es clave para mantener los ecosistemas saludables.'
    },
    {
      title: 'Reducción de la Contaminación',
      information: 'Reducir la contaminación del aire, agua y suelo, ya que la contaminación puede tener efectos negativos en la salud de los animales y sus hábitats.'
    },
    {
      title: 'Lucha contra el Cambio Climático',
      information: 'Contribuir a la lucha contra el cambio climático, ya que este fenómeno puede tener impactos significativos en los patrones climáticos, los hábitats y la distribución de especies.'
    },
    {
      title: 'Participación en Proyectos de Conservación',
      information: 'Apoyar y participar en proyectos de conservación dirigidos por organizaciones ambientales y gubernamentales. Esto puede incluir donaciones, voluntariado o participación activa en iniciativas locales'
    },
    {
      title: 'Desarrollo Sostenible:',
      information: 'Abogar por el desarrollo sostenible en comunidades locales y a nivel global. Esto implica equilibrar el desarrollo económico con la preservación de la biodiversidad y los ecosistemas.'
    },
    {
      title: 'Consumo Consciente',
      information: 'Adoptar un estilo de vida de consumo consciente, eligiendo productos que sean respetuosos con el medio ambiente y no contribuyan a la degradación de hábitats naturales.'
    }
  ]
  const moreDataDonate = ` Prevenir la extinción de los animales es un desafío global que involucra la colaboración
  de gobiernos, organizaciones ambientales, comunidades locales y personas individuales.
  Aquí hay algunas acciones clave que se pueden tomar para contribuir a la prevención de  la extinción de animales:
 `

  // Router handler for the animal navbar page ->
  // const onAnimalRouteChecker = () => {
  //   return onAnimalRoute
  // }

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

  // update the total of products
  const updateTotalCounting = (newCounting) => {
    const newCount = parseInt(newCounting)
    setTotalCounting(newCount + totalCounting)
  }

  // data used on user page
  const purchaseData = [
    {
      id: '#738',
      date: '8 sep,2022',
      total: '$13000 ',
      products: '(5 Productos)',
      state: 'Procesando'
    },
    {
      id: '#703',
      date: '24 May,2022',
      total: '$2000 ',
      products: '(1 Producto)',
      state: 'En camino'
    },
    {
      id: '#130',
      date: '22 Oct,2023',
      total: '$5000 ',
      products: '(3 Productos)',
      state: 'Completado'
    },
    {
      id: '#561',
      date: '1 Feb,2023',
      total: '$3500 ',
      products: '(1 Producto)',
      state: 'Completado'
    },
    {
      id: '#536',
      date: '21 Sep,2023',
      total: '$500 ',
      products: '(13 Productos)',
      state: 'Completado'
    },
    {
      id: '#492',
      date: '22 Oct,2023',
      total: '$300 ',
      products: '(2 Productos)',
      state: 'Completado'
    }
  ]

  const donationData = [
    {
      id: '#738',
      date: '8 sep,2022',
      total: '$13000 ',
      products: '',
      state: 'Completada'
    },
    {
      id: '#703',
      date: '24 May,2022',
      total: '$2500 ',
      products: '',
      state: 'Completada'
    },
    {
      id: '#130',
      date: '22 Oct,2023',
      total: '$7000 ',
      products: '',
      state: 'Completada'
    },
    {
      id: '#561',
      date: '1 Feb,2023',
      total: '$3500 ',
      products: '',
      state: 'Completada'
    },
    {
      id: '#536',
      date: '21 Sep,2023',
      total: '$5500 ',
      products: '',
      state: 'Completada'
    },
    {
      id: '#492',
      date: '22 Oct,2023',
      total: '$30000 ',
      products: '',
      state: 'Completada'
    }
  ]

  const constextValue = {
    getDataFromServer,
    openDropdown,
    navBarDropDown,
    closeDropDown,
    setNavBarDropDown,
    windowSize,
    isOpen,
    setIsOpen,
    toggle,
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
    phone,setPhone,
    state,
    setState,
    setCity,
    postal,
    setPostal,
    street,
    setStreet,
    streetNumber,
    setStreetNumber,
    enableButton,
    setEnableButton,
    purchaseData,
    donationData
  }

  return <ContentContext.Provider value={constextValue}>{children}</ContentContext.Provider>
}

export default ContentProvider

export const useContentContext = () => useContext(ContentContext)
