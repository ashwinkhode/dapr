import Image from 'next/image'

const Hero = () => {
    return (
        <div className="flex flex-row justify-between min-w-full">
            <div className="flex flex-col justify-center px-16">
                <h2 className='font-bold text-4xl '>SUMMER SALE</h2>
                <h1 className='font-bold text-4xl my-2'>UP TO 80% OFF</h1>
                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis quasi soluta. Ipsa dolorum, quibusdam distinctio, impedit soluta a, vel eum quos porro necessitatibus officia nobis deleniti nulla sit adipisci.</p>
                <button className='bg-gray-700 text-white p-2 mt-8 w-max rounded-sm'>Shop Now</button>
            </div>
            <div className="container right overflow-hidden">
                <img
                    src='/hero-image.jpg'
                    alt='hero'
                    className='object-bottom'
                />
            </div>
        </div>
    )
}

export default Hero