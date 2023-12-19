import React from 'react'

function DownSectionLayout({ children }) {
    return (
        <section className='my-[54px] w-[90%] flex flex-col items-center md:flex-row md:justify-center md:gap-28'>
            {children}
        </section>
    )
}

export default DownSectionLayout