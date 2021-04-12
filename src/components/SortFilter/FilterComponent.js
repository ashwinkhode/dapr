import {useState} from 'react'
import clsx from 'clsx'

import {useShop} from '../../context/shopContext'
import {handleFilter} from '../../reducers/shop/shop.actions'

import Button from '../Button/Button'


const FilterComponent = () => {

  const filterProperties = ['men_clothing', 'women_clothing', 'jewelery', 'electronics']
  const {shopState, dispatchToShop} = useShop()
  const [checkedValue, setCheckedValue] = useState(shopState.filters)

  return (
    <div className="p-8 flex flex-col gap-y-2">
      <h3>Filter Products by Properties</h3>
      <hl className='border-t-2 border-gray-400' />
      {
        filterProperties.map(
          (property) => {
            return (
              <div
                key={property}
                className='mt-2 inline-flex space-x-2 items-center '
                onClick={(e) => setCheckedValue({...checkedValue, [property]: !checkedValue[property]})}
              >
                <input
                  checked={checkedValue[property] === true}
                  type='checkbox'
                  value={property}
                  className='border border-transparent checked:bg-gray-500'
                  onChange={() => { }}
                />
                <label
                  htmlFor={property}
                  className="whitespace-nowrap text-sm font-medium text-gray-700"
                >
                  <p className={clsx(checkedValue[property] === property ? 'font-semibold' : '', 'capitalize')}>
                    {property.replace('_', ' ')}
                  </p>
                </label>
              </div>
            )
          }
        )
      }
      <Button
        variant='primary'
        fullWidth
        className='mt-2'
        onClick={() => dispatchToShop(handleFilter(checkedValue))}
      >
        Apply Filters
        </Button>

    </div>
  )
}

export default FilterComponent