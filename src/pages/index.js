import Head from 'next/head'

import SEO from '../components/SEO/SEO'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import OfferCard from '../components/OfferCard/OfferCard'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className='min-w-full min-h-full'>
      <SEO />

      <div className="lg:w-9/12 mx-auto">
        <div className='mb-12'>
          <Jumbotron
            title="Winter 21’"
            subTitle='UPTO 60% OFF'
            description='Winter layer season is here. Check out our trendy new winter collection to stay warm in style.'
            image='/model1.png'
          />
        </div>
        <div className='mt-2 mb-20 w-full'>
          <div className='h-[160vh] lg:h-[50vh] py-4 justify-center items-center gap-y-8 lg:gap-x-8 flex flex-col lg:flex-row'>
            <div className="offercard w-full h-full lg:w-1/2">
              <OfferCard />
            </div>
            <div className="offercard w-full h-full lg:w-1/2">
              <OfferCard
                title='New Arrivals'
                subtitle='The Black Beauty'
                description='Look sophisticated in our new collection of all-black clothing ensemble'
                image='/model3.png'
              />
            </div>
          </div>
        </div>
        <div className='my-16'>
          <Jumbotron
            title='All Ups For Grabs'
            subTitle='Enjoy up to 70% off!'
            description='Grab your limited-time discount and enjoy 70& off on all our products'
            image='/model2.png'
            variant='gray'
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
