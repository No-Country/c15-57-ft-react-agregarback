import React from 'react'

function StoreLayout({ children }) {
    return (
        <section className='flex flex-col md:flex-row'>
            {children}
        </section>
    )
}

export default StoreLayout