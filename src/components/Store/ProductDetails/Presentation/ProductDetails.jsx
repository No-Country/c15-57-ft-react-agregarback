import React from 'react'
import ProductDetailsLayout from './ProductDetailsLayout'
import ProductDetailsElements from './ProductDetailsElements'

function ProductDetailsContainer({product}) {
    return (
        <ProductDetailsLayout>
            <ProductDetailsElements product={product} />
        </ProductDetailsLayout>
    )
}

export default ProductDetailsContainer