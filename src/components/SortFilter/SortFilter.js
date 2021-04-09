import {BsFilter} from 'react-icons/bs'
import {TiSortAlphabetically} from 'react-icons/ti'

import Button from '../Button/Button'

const SortFilter = () => {
    return (
        <div className='lg:text-right flex flex-1 lg:flex-grow-0 z-20'>
            <Button variant='secondary' className='w-full lg:mr-4'><TiSortAlphabetically /> Filter</Button>
            <Button variant='secondary' className='w-full lg:w-max'><BsFilter /> Sort</Button>
        </div>
    )
}

export default SortFilter