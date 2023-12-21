import React from 'react'
import ProductDetails from '../../ProductDetails/Component/ProductDetails'

function ModalElements({ onClose, product }) {
    return (
        <div className='bg-white p-4 rounded-lg w-[95%] shadow-md relative'>
            <button className='absolute top-2 right-2 pr-2 text-xl font-semibold text-gray-500 hover:text-gray-700' onClick={onClose}>
                X
            </button>
            <>
                <ProductDetails product={product} />
            </>
        </div>
    )
}

export default ModalElements