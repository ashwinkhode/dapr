import {useRouter} from 'next/router'
import Fuse from 'fuse.js'
import {Toaster} from 'react-hot-toast';

import {server} from '../../../config'

import ProductGrid from '../../components/ProductGrid/ProductGrid'
import SEO from '../../components/SEO/SEO'
import SortFilter from '../../components/SortFilter/SortFilter'

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

    const router = useRouter()
    const searchQuery = decodeURI(router.asPath).split('=')[1]
    const fuse = new Fuse(products, {keys: ['title']})
    const searchedProducts = searchQuery
        ? fuse.search(searchQuery).map(element => element.item)
        : products
    const totalProducts = searchedProducts.length

    return (
        <div className='relative pb-8 mt-2 md:mt-0'>
            <SEO pageTitle='Products' />
            <div className='flex justify-between items-center sm:-mx-4 z-20 fixed bottom-0 bg-white w-[100vw] sm:w-[98vw] lg:w-full lg:mx-0 lg:relative lg:mb-1 lg:shadow-none'>
                <h1 className='font-bold text-2xl hidden lg:block'>Showing Products <small className='font-light text-sm ml-1'>{`(Showing 1 – ${totalProducts}  products of ${totalProducts} products)`}</small></h1>
                <SortFilter />
            </div>
            <ProductGrid products={searchedProducts} />
            <Toaster position='bottom-right' />
        </div>
    )
}

export default Products