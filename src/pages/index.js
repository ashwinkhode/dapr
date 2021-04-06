import Head from 'next/head'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'

export default function Home() {
  return (
    <div className='min-w-full min-h-full'>
      <Head>
        <title>Dapr | Premium Clothing</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="lg:w-9/12 mx-auto mt-8">
        <Hero />
      </div>

    </div>
  )
}
