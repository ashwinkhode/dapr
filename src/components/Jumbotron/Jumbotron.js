import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import Button from '../Button/Button'

const VARIANTS = {
    white: {
        div: 'bg-white',
        h1: 'text-gray-700',
        h2: 'text-gray-700',
        p: 'text-gray-500',
    },
    gray: {
        div: 'bg-gray-700',
        h1: 'text-white',
        h2: 'text-white',
        p: 'text-gray-300',
    },
}

const Jumbotron = ({
    title,
    subtitle,
    description,
    url,
    variant = 'white',
}) => {
    const { div, h1, h2, p } = VARIANTS[variant]

    return (
        <div className={clsx(div, 'relative p-2')}>
            <div className="flex flex-col gap-y-8 md:flex-row justify-center md:items-center md:justify-between h-full px-6 pt-14 md:py-10 lg:py-[8.5rem] md:px-14 border-2 border-white">
                <div className="w-4/5 sm:w-1/2 md:ml-0 flex flex-col justify-center">
                    <h1
                        className={clsx(
                            h1,
                            'font-light text-5xl md:text-[5rem] md:leading-none',
                        )}
                    >
                        {title}
                    </h1>
                    {subtitle && (
                        <h2
                            className={clsx(
                                h2,
                                'font-bold text-2xl md:text-4xl py-2 ',
                            )}
                        >
                            {subtitle}
                        </h2>
                    )}
                    <p
                        className={clsx(
                            p,
                            'text-sm leading-8 md:w-3/4 pt-2 pb-6 ',
                        )}
                    >
                        {description}
                    </p>
                    <Link href="/products">
                        <a className="w-max">
                            <Button
                                padding="px-12 py-3 sm:px-16 sm:py-3"
                                variant={
                                    variant === 'white' ? 'secondary' : 'invert'
                                }
                                className="border-2 w-max"
                            >
                                Shop Now
                            </Button>
                        </a>
                    </Link>
                </div>
                <div className="w-full h-64 md:h-[90%] md:w-2/5 relative md:absolute md:bottom-0 md:-right-8 lg:-right-20 overflow-hidden self-center md:self-auto">
                    <Image
                        src={url}
                        alt="clothing"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="bottom"
                    />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
