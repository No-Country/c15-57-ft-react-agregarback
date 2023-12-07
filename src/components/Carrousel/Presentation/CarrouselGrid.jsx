import React from 'react'

import '../Presentation/style.css'

const CarrouselGrid = ({children}) => {

    return (
        <header className="hero-container">
            {children}
        </header>
    )
}

export default CarrouselGrid