import {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import Button from '../Button/Button'

const Searchbar = () => {
    const [userInput, setUserInput] = useState('')

    return (
        <div
            className='flex flex-row justify-between items-center border-b-2 h-3/4 border-gray-400 rounded text-xs sm:text-base sm:max-w-full overflow-hidden '>
            <input
                className='h-full w-[90%] md:3/4 lg:w-5/6 outline-none p-4'
                type='text'
                placeholder='Search'
                onChange={
                    (e) => setUserInput(e.target.value)
                }
            />
            <div className="h-full w-[15%] md:1/4 lg:w-2/12 rounded overflow-hidden">
                <Button variant='primary' fullWidth className='w-full h-full' padding='p-0 px-1 py-0'>
                    <AiOutlineSearch className='text-2xl' />
                </Button>
            </div>
        </div>
    )
}

export default Searchbar