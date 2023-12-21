import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetData = (url, paramRequired) => {
  const [data, setData] = useState([])

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
      fetchData(url)
    }, 0)
    return () => clearTimeout(timeoutId)
  }, [url])

  const handleError = (error) => {
    console.error(error)
  }

  return { data }
}

export default useGetData
