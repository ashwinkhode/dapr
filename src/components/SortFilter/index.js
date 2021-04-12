import Rodal from 'rodal'

import SortComponent from './SortComponent'
import FilterComponent from './FilterComponent'

import {useShop} from '../../context/shopContext'
import {handleFilterStatus, handleSortStatus} from '../../reducers/shop/shop.actions'

const SortFilter = () => {

    const {shopState, dispatchToShop} = useShop()

    return (
        <Rodal
            // width={40}
            // height={60}
            // measure={'%'}
            className='w-full h-full'
            animation={'slideUp'}
            visible={shopState.sortStatus || shopState.filterStatus}
            onClose={() => shopState.sortStatus ? dispatchToShop(handleSortStatus(true)) : dispatchToShop(handleFilterStatus(true))}>
            {
                shopState.sortStatus
                    ? <SortComponent />
                    : null
            }
            {
                shopState.filterStatus
                    ? <FilterComponent />
                    : null
            }
        </Rodal>
    )
}

export default SortFilter