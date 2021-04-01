import {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Searchbar = () => {
    const [userInput, setUserInput] = useState('')

    return (
        <div
            className='flex flex-row px-2 border-2 border-gray-400 rounded text-xs sm:text-base max-w-[8rem] sm:max-w-full overflow-hidden sm:w-1/3' >
            <AiOutlineSearch className='min-w-[1rem] h-full mr-1' />
            <input
                className='h-full w-full outline-none'
                type='text'
                placeholder='Search'
                onChange={
                    (e) => setUserInput(e.target.value)
                }
            />
        </div>
    )
}

export default Searchbar