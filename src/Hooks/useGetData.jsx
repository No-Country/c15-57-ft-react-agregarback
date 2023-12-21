import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetData = (url, paramRequired) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url)
      const info = response.data[paramRequired]
      setData(info)
    } catch (error) {
      handleError(error)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
      fetchData(url)
    }, 2500) // no modificar afecta el rendimiento de la app 
    return () => clearTimeout(timeoutId)
  }, [url])

  const handleError = (error) => {
    console.error(error)
  }

  return { data, loading }
}

export default useGetData
