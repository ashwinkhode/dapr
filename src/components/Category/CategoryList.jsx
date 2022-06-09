import { RiHandbagLine, RiArrowRightLine } from 'react-icons/ri'
import { BiCloset } from 'react-icons/bi'
import { BsSmartwatch } from 'react-icons/bs'
import { MdChildCare, MdFemale, MdMale } from 'react-icons/md'
import CategoryCard from './CategoryCard'

const CATEGORY_LIST = [
    {
        icon: MdMale,
        title: 'Men Clothing',
    },
    {
        icon: MdFemale,
        title: 'Women Clothing',
    },
    {
        icon: MdChildCare,
        title: 'Kids',
    },
    {
        icon: BsSmartwatch,
        title: 'Watches',
    },
    {
        icon: RiHandbagLine,
        title: 'Bags',
    },
    {
        icon: BiCloset,
        title: 'Accessory',
    },
    {
        icon: RiArrowRightLine,
        title: 'View All',
    },
]

export default function CategoryList() {
    return (
        <div className="flex items-stretch">
            {CATEGORY_LIST.map((category) => (
                <CategoryCard
                    key={category.title}
                    icon={category.icon}
                    title={category.title}
                    // TODO: Add href for each category
                    href={'/products'}
                />
            ))}
        </div>
    )
}
