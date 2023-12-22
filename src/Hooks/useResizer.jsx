
import useWindowReader from './useWindowReader'
import { useContentContext } from '../Store/contextStore/ContentContext'
import { useEffect } from 'react'
function useResizer() {
    const {setIsOpen} = useContentContext()
    const { windowSize } = useWindowReader()
    const checkWindowSize = () => {
        if (windowSize[0] > 767) { setIsOpen(false) }
    }

    useEffect(() => {
        checkWindowSize()
    }, [windowSize])
}

export default useResizer