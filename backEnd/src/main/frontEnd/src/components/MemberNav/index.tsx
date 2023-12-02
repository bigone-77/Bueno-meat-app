import { Link } from "react-router-dom"

const MemberNav = () => {
    return (
        <div className='absolute left-0 w-52'>
            <ul className="flex flex-col gap-5 px-5 text-4xl text-gray-400 font-Cafe24Shiningstar">
                <p className="mb-10 text-6xl text-black">My Bueno</p>
                <Link to='/member/mypage/orderlist'><li className="border-none hover:text-blue-400">OrderList</li></Link>
                <li className="border-none hover:text-blue-400">Review</li>
                <li className="border-none hover:text-blue-400">Counsel</li>
                <Link to='/member/mypage/wishlist'><li className="border-none hover:text-blue-400">WishList</li></Link>
                <Link to='/member/mypage/cart'><li className="border-none hover:text-blue-400">Cart</li></Link>
            </ul>
        </div>
    )
}

export default MemberNav