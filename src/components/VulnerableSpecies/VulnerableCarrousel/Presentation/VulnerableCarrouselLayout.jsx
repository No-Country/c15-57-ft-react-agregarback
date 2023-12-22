import React from 'react'

function VulnerableCarrouselLayout({ children }) {
    return (
        <section
            style={{ backgroundImage: `url(${selva2})` }}
            className='w-[25vw] h-[744px] shrink-0 bg-cover bg-no-repeat flex flex-row'
        >{children}</section>
    )
}

export default VulnerableCarrouselLayout