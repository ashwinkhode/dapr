import Image from 'next/image'
import Link from 'next/link'

import Button from '../Button/Button'

const OfferCard = ({title, subtitle, description, url}) => {
    return (
        <div className="offercard w-full h-full border-gray-300 sm:border">
            <div className="h-full flex flex-col sm:flex-row p-8">
                <div className="sm:w-1/2 flex flex-col justify-between">
                    <h1 className="uppercase">
                        {title}
                    </h1>
                    <div>
                        <h2 className="text-gray-700 text-2xl font-semibold uppercase mt-4 sm:mt-0">
                            {subtitle}
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-sm mb-8 sm:mb-0 sm:my-2 w-2/3">
                            {description}
                        </p>
                    </div>
                    <div>
                        <Link href="/products">
                            <a>
                                <Button variant='secondary' className="border-2">
                                    Discover More
                                </Button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="sm:w-1/2 relative h-full">
                    <Image
                        src={url}
                        alt='clothing'
                        layout='fill'
                    />
                </div>
            </div>
        </div>
    )
}

export default OfferCard