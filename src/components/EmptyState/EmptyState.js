import Link from 'next/link'

import Button from '../Button/Button'

const EmptyState = ({page}) => {

    return (
        <div className='relative flex flex-col justify-center gap-y-4 p-4 lg:p-4 border border-gray-100 shadow-md'>
            <p>You have no items in your {page}. Start adding!</p>
            <Link href='/products'>
                <Button variant='primary'>
                    Go Shopping
            </Button>
            </Link>
        </div>
    )

}

export default EmptyState