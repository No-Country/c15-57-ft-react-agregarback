import useGetData from '../../../../Hooks/useGetData';
import ProductCategoriesContainer from '../Presentation/ProductCategories'


function ProductCategories() {

    const url = 'productCs'

    const { data } = useGetData(url, 'productCs')

    return <ProductCategoriesContainer
        products={data}
    />

}

export default ProductCategories