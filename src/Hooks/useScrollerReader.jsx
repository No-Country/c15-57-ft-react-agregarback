import React, { useState, useEffect } from 'react'

function useScrollerReader(isOpen, setIsOpen) {

    const [scrollPosition, setScrollPosition] = useState(0);

    // Agrega un efecto que se ejecuta al montar el componente y cada vez que scrollPosition cambia
    useEffect(() => {
        const handleScroll = () => {
            // Actualiza la posición de desplazamiento cuando ocurre el evento de desplazamiento
            setScrollPosition(window.scrollY);
        };

        // Agrega el evento de desplazamiento al montar el componente
        window.addEventListener('scroll', handleScroll);

        // Elimina el evento de desplazamiento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

  
    return isOpen;

}

export default useScrollerReader