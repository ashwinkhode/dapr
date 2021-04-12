import {useState} from 'react'

import {useShop} from '../../context/shopContext'
import {handleSort} from '../../reducers/shop/shop.actions'

import Button from '../Button/Button'

const SortComponent = () => {

    const {shopState, dispatchToShop} = useShop()
    const [checkedValue, setCheckedValue] = useState(shopState.sort)

    return (
        <div className="p-8 flex flex-col gap-y-2">
            <h3>Sort Products by Price</h3>
            <hl className='border-t-2 border-gray-400' />
            <div className='mt-2'>
                <input
                    checked={checkedValue === "lowHigh"}
                    onChange={(e) => e.target.checked ? setCheckedValue(e.target.value) : null}
                    type="radio"
                    value="lowHigh"
                    id="lowHigh"
                    className='hidden'
                />
                <label
                    htmlFor="lowHigh"
                    className="inline-flex gap-x-2 whitespace-nowrap text-sm font-medium text-gray-700"
                >
                    <span className="w-4 h-4 inline-flex rounded-full border border-grey flex-no-shrink"></span>
                    <p className={checkedValue === 'lowHigh' ? 'font-semibold' : ''}>
                        Price - Low to High
                    </p>
                </label>
            </div>
            <div>
                <input
                    checked={checkedValue === "highLow"}
                    onChange={(e) => e.target.checked ? setCheckedValue(e.target.value) : null}
                    type="radio"
                    value="highLow"
                    id="highLow"
                    className='hidden '
                />
                <label
                    htmlFor="highLow"
                    className="inline-flex gap-x-2 whitespace-nowrap text-sm font-medium text-gray-700"
                >
                    <span className="w-4 h-4 inline-flex rounded-full border border-grey flex-no-shrink"></span>
                    <p className={checkedValue === 'highLow' ? 'font-semibold' : ''}>
                        Price - High to Low
                    </p>
                </label>
            </div>
            <Button
                variant='primary'
                fullWidth
                className='mt-2'
                onClick={() => dispatchToShop(handleSort(checkedValue))}
            >Sort</Button>

        </div>
    )
}

export default SortComponent