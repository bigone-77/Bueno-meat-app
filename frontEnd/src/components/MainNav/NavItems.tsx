import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import IconCard from '../IconCard'


const NavItems = [
    {
        id: 1,
        label: 'MY BUENO',
        path: 'mypage',
        icon: CgProfile
    },
    {
        id: 2,
        label: 'SHOPPING CART',
        icon: AiOutlineShoppingCart,
        path: 'mycart',
        type: 'shoppingCart'
    },
    {
        id: 3,
        label: 'WISHLIST',
        icon: BsFillBagHeartFill,
        path: 'wishlist',
        type: 'heart'
    },
]

export const ShowNavItems = () => {
    return (
        <div className='flex gap-3'>
            {NavItems.map(item => (
                <IconCard
                    key={item.id}
                    label={item.label}
                    icon={item.icon}
                    type={item.type}
                    path={item.path}
                />
            ))}
        </div>
    )
}