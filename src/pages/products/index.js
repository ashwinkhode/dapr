import {useRouter} from 'next/router'
import Fuse from 'fuse.js'
import {Toaster} from 'react-hot-toast';
import {TiSortAlphabetically} from 'react-icons/ti'
import {BsFilter} from 'react-icons/bs'

import {server} from '../../../config'
import {handleFilterStatus, handleSortStatus} from '../../reducers/shop/shop.actions'
import {getFilteredData, getSortedData} from '../../utils/shopHelpers'

import ProductGrid from '../../components/ProductGrid/ProductGrid'
import Button from '../../components/Button/Button'
import SEO from '../../components/SEO/SEO'
import SortFilter from '../../components/SortFilter/'
import {useShop} from '../../context/shopContext';

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

	const {shopState, dispatchToShop} = useShop()
	const router = useRouter()
	const searchQuery = decodeURI(router.asPath).split('=')[1]
	const fuse = new Fuse(products, {keys: ['title']})
	const searchedProducts = searchQuery
		? fuse.search(searchQuery).map(element => element.item)
		: products
	const filteredData = getFilteredData(searchedProducts, shopState.filters)
	const sortedData = getSortedData(filteredData, shopState.sort)
	const resultantProducts = sortedData
	const totalProducts = resultantProducts?.length

	return (
		<div className='relative pb-8 mt-2 md:mt-0'>
			<SEO pageTitle='Products' />
			<div className='flex justify-between items-center sm:-mx-4 z-20 fixed bottom-0 bg-white w-[100vw] sm:w-[98vw] lg:w-full lg:mx-0 lg:relative lg:mb-1 lg:shadow-none'>
				<h1 className='font-bold text-2xl hidden lg:block'>
					Showing Products
					<small className='font-light text-sm ml-1'>
						{
							`(Showing 1 – ${totalProducts}  products of ${totalProducts} products)`
						}
					</small>
				</h1>
				<div className='lg:text-right flex flex-1 lg:flex-grow-0 z-20'>
					<Button
						variant='secondary'
						className='w-full lg:mr-4'
						onClick={() => dispatchToShop(handleFilterStatus(shopState.filterStatus))}
					>
						<TiSortAlphabetically />
						Filter
					</Button>
					<Button
						variant='secondary'
						className='w-full lg:w-max'
						onClick={() => dispatchToShop(handleSortStatus(shopState.sortStatus))}
					>
						<BsFilter />
						Sort
					</Button>
				</div>
			</div>

			<ProductGrid products={resultantProducts} />

			<SortFilter />

			<Toaster
				position='bottom-right'
				toastOptions={
					{
						duration: 1000
					}
				}
			/>

		</div>
	)
}

export default Products