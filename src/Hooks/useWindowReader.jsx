import { useState, useEffect } from "react";

function useWindowReader() {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return { windowSize }
}

export default useWindowReader