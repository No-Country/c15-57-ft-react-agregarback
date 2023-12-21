import React from 'react'
import StoreLayout from './StoreLayout'
import StoreElements from './StoreElements'

const StoreContainer = ({ products, category }) => {
    return (
        <StoreLayout>
            <StoreElements
                products={products}
                category={category}
            />
        </ StoreLayout>
    )
}

export default StoreContainer