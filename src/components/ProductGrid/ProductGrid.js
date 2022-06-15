import ProductCard from '../ProductCard/ProductCard'

const ProductGrid = ({ products }) => {
    return (
        // <div className="flex flex-row flex-wrap md:justify-between my-4 mx-auto sm:w-11/12 sm:gap-4 flex-1">
        <div className="flex flex-wrap overflow-hidden lg:overflow-visible pb-12 -mx-2 md:-mx-2 lg:-mx-2">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductGrid
