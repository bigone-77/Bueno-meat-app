import { useSelector } from "react-redux"
import { RootState } from "../../../redux"

const WishList = () => {
    const userId = useSelector((state: RootState) => state.currentUser.id);
    
    return (
        <div className='mt-10 ml-52'>
            <p className="text-5xl font-bold text-start">관심상품</p>
        </div>
    )
}

export default WishList