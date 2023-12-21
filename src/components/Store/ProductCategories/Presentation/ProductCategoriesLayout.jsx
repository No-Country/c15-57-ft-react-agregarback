import React from 'react'

function ProductCategoriesLayout({ children }) {
    return (
        <section className='w-full flex flex-col gap-[1rem] md:pt-26 p-4'>
            <ul className='carousel carousel-center md:flex md:flex-row md:items-center sm:justify-center gap-8'>
                {children}
            </ul>
        </section>
    )
}

export default ProductCategoriesLayout