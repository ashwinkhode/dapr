import Header from '../components/Header/Header'
import {CartProvider} from '../context/cartContext'
import '../styles/global.css'

function MyApp({Component, pageProps}) {
  return (
    <CartProvider>
      <div className='w-full'>
        <Header />
        <div className="md:mt-4 sm:mx-4 overflow-hidden">
          <Component {...pageProps} />
        </div>
      </div>
    </CartProvider>
  )
}

export default MyApp
