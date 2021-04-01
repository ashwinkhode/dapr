import Head from 'next/head'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'

export default function Home() {
  return (
    <div className='min-w-full min-h-full'>
      <Head>
        <title>Miku Mart | E-commerce website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="lg:w-9/12 mx-auto mt-8">
        <Hero />

      </div>

    </div>
  )
}
