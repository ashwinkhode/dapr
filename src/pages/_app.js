import Header from '../components/Header/Header'
import {CartProvider} from '../context/cartContext'
import {ShopProvider} from '../context/shopContext'
import '../styles/global.css'

// Todo: Add bg-gray-50 or #F6F7FB to the parent div

function MyApp({Component, pageProps}) {
  return (
    <ShopProvider>
      <CartProvider>
        <div className='w-full'>
          <Header />
          <div className="md:pt-4 sm:px-4 overflow-hidden z-[-1]">
            <Component {...pageProps} />
          </div>
        </div>
      </CartProvider>
    </ShopProvider>
  )
}

export default MyApp
