import React from 'react'
import CarrouselGrid from './CarrouselGrid'
import CarrouselItems from './CarrouselItems'

const Carrousel = ({ props }) => {



    //CONTEXT API IN ORDER TO AVOID THE PROPS DRILLING !!!!
    // AND THE USAGE OF 'setMostrar' FUNCTIONALITY   WORKS!!! 

    return (

        <CarrouselGrid>
            <CarrouselItems
                props={props}
            />
        </CarrouselGrid>

    )
}

export default Carrousel