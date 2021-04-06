import Head from 'next/head'

import SEO from '../components/SEO/SEO'
import Hero from '../components/Hero/Hero'

export default function Home() {
  return (
    <div className='min-w-full min-h-full'>
      <SEO />

      <div className="lg:w-9/12 mx-auto mt-8">
        <Hero />
      </div>

    </div>
  )
}
