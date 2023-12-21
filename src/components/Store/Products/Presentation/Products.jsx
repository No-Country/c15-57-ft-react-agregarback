import React from 'react'
import ProductsElements from '../Presentation/ProductsElements'
import ProductsLayout from '../Presentation/ProductsLayout'

function ProductsContainer({ products, category }) {
  return (
    <ProductsLayout>
      <ProductsElements
        products={products}
        category={category}
      />
    </ProductsLayout>
  )
}

export default ProductsContainer