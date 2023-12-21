import React from 'react'
import { useECommerceContext } from '../../../../Store/contextStore/ECommerceContext'

function ProductCategoriesElements({ products }) {
    const { setCategory } = useECommerceContext()
    return (
        <>
            {
                products.map((product) => (
                    <li
                        onClick={() => setCategory(product.name)}
                        className='cursor-pointer carousel-item'
                        key={product.id}
                    >
                        <div className='flex flex-col items-center'>
                            <img
                                className='w-[5.625rem] h-[5.625rem]'
                                src={product.img}
                                alt={product.name}
                            />
                            <span className='text-[color:var(--Dark,#1E293B)] text-[0.9375rem] not-italic font-light leading-[137%] tracking-[-0.05rem]'>
                                {product.name}
                            </span>
                        </div>
                    </li>
                ))
            }
        </>
    )
}

export default ProductCategoriesElements