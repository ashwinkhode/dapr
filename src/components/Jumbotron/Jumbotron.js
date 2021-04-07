import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import Button from '../Button/Button'

const VARIANTS = {
    white: {
        div: 'bg-white',
        h1: 'text-gray-700',
        h2: 'text-gray-700',
        p: 'text-gray-500'
    },
    gray: {
        div: 'bg-gray-700',
        h1: 'text-white',
        h2: 'text-white',
        p: 'text-gray-300'
    },
}

const Jumbotron = ({title, subtitle, description, url, variant = 'white'}) => {

    const {div, h1, h2, p} = VARIANTS[variant]

    return (
        <div className={
            clsx(div, "h-[90vh] sm:h-[60vh] p-3 lg:p-4")
        }>
            <div className="border-2 border-white flex flex-col pt-6 gap-y-8 sm:flex-row justify-center items-center lg:justify-between h-full lg:px-16">
                <div className="w-4/5 sm:w-1/2 ml-6 lg:ml-0 flex flex-col justify-center">
                    <h1 className={clsx(h1, "font-light text-3xl lg:text-6xl")}>
                        {title}
                    </h1>
                    <h2 className={clsx(h2, "font-bold text-2xl lg:text-4xl py-2 ")}>
                        {subtitle}
                    </h2>
                    <p className={clsx(p, "text-sm w-3/4 pt-2 pb-6 ")}>
                        {description}
                    </p>
                    <Link href='/products'>
                        <Button variant={variant === 'white' ? 'secondary' : 'invert'}
                            className="border-2 w-max">
                            <a>
                                Shop Now
                            </a>
                        </Button>
                    </Link>
                </div>
                <div className="w-2/3 h-full lg:w-[40%]  md:w-2/5 relative overflow-hidden">
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

export default Jumbotron