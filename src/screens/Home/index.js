import Jumbotron from '../../components/Jumbotron/Jumbotron'
import OfferCard from '../../components/OfferCard/OfferCard'

export default function HomeScreen() {
    return (
        <div className="min-w-full min-h-full md:px-20 lg:px-40">
            <div className="mx-auto">
                <div className="mb-12">
                    <Jumbotron
                        title="Winter 21’"
                        // subtitle="UPTO 60% OFF"
                        description="Winter layer season is here. Check out our trendy new winter collection to stay warm in style."
                        url="/model1.png"
                    />
                </div>
                <div className="mt-2 mb-20 w-full">
                    <div className="lg:h-[50vh] py-4 justify-center items-center gap-y-8 lg:gap-x-8 flex flex-col lg:flex-row">
                        <div className="offercard w-full h-full lg:w-1/2">
                            <OfferCard
                                title="Winter Collection"
                                subtitle="Winter's Best"
                                description="Check out our best winter collection to stay warm in style this season"
                                url="/model4.png"
                            />
                        </div>
                        <div className="offercard w-full h-full lg:w-1/2">
                            <OfferCard
                                title="New Arrivals"
                                subtitle="The Black Beauty"
                                description="Look sophisticated in our new collection of all-black clothing ensemble"
                                url="/model3.png"
                            />
                        </div>
                    </div>
                </div>
                <div className="my-16">
                    <Jumbotron
                        title="Grab the Drip"
                        // subtitle="Enjoy up to 70% off!"
                        description="Grab your limited-time discount and enjoy 70& off on all our products"
                        url="/model2.png"
                        variant="gray"
                    />
                </div>
            </div>
        </div>
    )
}
