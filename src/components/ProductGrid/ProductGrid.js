import ProductCard from '../ProductCard/ProductCard'

const ProductGrid = ({products}) => {
    return (
        // <div className="flex flex-row flex-wrap md:justify-between my-4 mx-auto sm:w-11/12 sm:gap-4 flex-1">
        <div className="flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-1 xl:-mx-1">
            {
                products.map(
                    (product) => <ProductCard key={product.id} product={product} />
                )
            }
        </div>

    )
}

export default ProductGrid