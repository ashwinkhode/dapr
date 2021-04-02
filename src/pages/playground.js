import Header from '../components/Header/Header';
import ProductDetails from '../components/ProductDetails/ProductDetails';


export default function Playground() {
    return (
        <div className='w-full'>
            <Header />
            <div className=" md:mt-4 sm:mx-4 overflow-hidden">
                <ProductDetails />
            </div>
        </div>
    )
}