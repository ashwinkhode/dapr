import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductGrid from '../components/ProductGrid/ProductGrid';


export default function Playground() {
    return (
        <div className='w-full'>
            <Header />
            <div className=" mt-4 mx-4 overflow-hidden">
                <ProductGrid />
            </div>
        </div>
    )
}