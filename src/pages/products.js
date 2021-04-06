import {server} from '../../config'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import SortFilter from '../components/SortFilter/SortFilter'

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

const Products = ({products}) => {

    return (
        <div className='relative mt-2 md:mt-0'>
            <div className='flex justify-between items-center sm:-mx-4 z-20 fixed bottom-0 bg-white w-[100vw] sm:w-[98vw] lg:w-full lg:mx-0 lg:relative lg:mb-1 lg:shadow-none'>
                <h1 className='font-bold text-2xl hidden lg:block'>Showing Products</h1>
                <SortFilter />
            </div>
            <ProductGrid products={products} />
        </div>
    )
}

export default Products