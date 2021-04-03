import {server} from '../../config'
import ProductGrid from '../components/ProductGrid/ProductGrid'

export async function getStaticProps(context) {

    const res = await fetch(server)
    const data = await res.json()

    return {
        props: {
            products: data,
            // isLoading: !error && !data,
            // isError: error
        }
    }
}

const Products = ({products, isLoading, isError}) => {

    return (
        <div>
            <ProductGrid products={products} />
        </div>
    )
}

export default Products