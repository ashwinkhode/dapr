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
            subtitle='UPTO 60% OFF'
            description='Winter layer season is here. Check out our trendy new winter collection to stay warm in style.'
            url='/model1.png'
          />
        </div>
        <div className='mt-2 mb-20 w-full'>
          <div className='h-[160vh] lg:h-[50vh] py-4 justify-center items-center gap-y-8 lg:gap-x-8 flex flex-col lg:flex-row'>
            <div className="offercard w-full h-full lg:w-1/2">
              <OfferCard
                title="Winter Collection"
                subtitle="Winter's Best"
                description='Check out our best winter collection to stay warm in style this season'
                url='/model4.png'
              />
            </div>
            <div className="offercard w-full h-full lg:w-1/2">
              <OfferCard
                title='New Arrivals'
                subtitle='The Black Beauty'
                description='Look sophisticated in our new collection of all-black clothing ensemble'
                url='/model3.png'
              />
            </div>
          </div>
        </div>
        <div className='my-16'>
          <Jumbotron
            title='All Ups For Grabs'
            subtitle='Enjoy up to 70% off!'
            description='Grab your limited-time discount and enjoy 70& off on all our products'
            url='/model2.png'
            variant='gray'
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
