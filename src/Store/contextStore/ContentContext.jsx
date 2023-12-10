
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const ContentContext = createContext()

const ContentProvider = ({ children }) => {
  //Dropdown navbar open and close handler 
  const [isOpen, setIsOpen] = useState(false)

  const openDropdown = () => {
    setIsOpen(!isOpen)
}

  const [mostrar, setMostrar] = useState(0)
  const [dataHero, setDataHero] = useState(0)

  const fetchData = async () => {

    try {

      await axios.get('api/animals').then((res) => setDataHero(res.data.animals))

    } catch (error) {

      console.log(error);

    };

  }

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 20000);
  }, []);

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
  }, [dataHero]);

  const datosMostrar = dataHero[mostrar]

  return (

    <ContentContext.Provider value={{ datosMostrar, dataHero, mostrar, setMostrar, isOpen, openDropdown }} >
      {children}
    </ContentContext.Provider>

  )
}

export default ContentProvider;

export const useContaintContext = () => useContext(ContentContext);