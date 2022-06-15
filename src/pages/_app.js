import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header/Header'
import { CartProvider } from '../context/cartContext'
import { ShopProvider } from '../context/shopContext'
import { initGA, logPageView } from '../utils/analytics'
import '../styles/global.css'
import Footer from '../components/Footer/Footer'

// Todo: Add bg-gray-50 or #F6F7FB to the parent div

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        const handleRouteChange = (url) => {
            logPageView()
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <ShopProvider>
            <CartProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </CartProvider>
        </ShopProvider>
    )
}

export default MyApp
