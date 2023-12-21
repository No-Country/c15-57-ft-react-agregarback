import ProductsContainer from '../Presentation/Products'

function Products({ products, category }) {

    return <ProductsContainer
        products={products}
        category={category}
    />

}

export default Products