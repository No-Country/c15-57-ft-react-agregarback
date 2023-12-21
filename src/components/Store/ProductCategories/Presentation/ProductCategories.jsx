import React from 'react'
import ProductCategoriesLayout from './ProductCategoriesLayout'
import ProductCategoriesElements from './ProductCategoriesElements'

function ProductCategoriesContainer({ products }) {
    return (
        <ProductCategoriesLayout>
            <ProductCategoriesElements
                 products={products}
            />
        </ProductCategoriesLayout>
    )
}

export default ProductCategoriesContainer