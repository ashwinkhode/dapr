import Header from '../components/Header/Header'
import '../styles/global.css'

function MyApp({Component, pageProps}) {
  return (
    <div className='w-full'>
      <Header />
      <div className="md:mt-4 sm:mx-4 overflow-hidden">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
