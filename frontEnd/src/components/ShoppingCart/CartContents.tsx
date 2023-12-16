import { useState } from 'react';
import { ProductProps } from '../../types/ProductProps'
import ConfirmCart from './ConfirmCart';
import ProductWeightOption from '../ProductWeightOption';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { removeCartData } from '../../redux/slices/cartSlice';

const CartContents = ({
    id,
    name,
    price,
    weight,
    weightUnit,
}: ProductProps) => {
    const [showConfirmCart, setShowConfirmCart] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const memberId = useSelector((state: RootState) => state.currentUser.id);
    const cartData = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const { itemCount, totalPrice, itemOption } = cartData;
    const putCartHandler = async () => {
        if (disabled) {
            toast.warn("옵션을 선택해주세요")
            setShowConfirmCart(false);
        } else {
            const response = await axios.post(`/products/putCart/${memberId}/${id}`,{
                memberId,
                itemId: id,
                itemCount,
                totalPrice,
                itemOption
            });
            console.log(response.data);
            dispatch(removeCartData());
            setShowConfirmCart(true);
        }
    }
    

    return (
        <div>
            {!showConfirmCart && <>
            <p className='my-10 text-2xl font-bold'>{name}</p>
            <ProductWeightOption 
                price={price}
                weight={weight}
                weightUnit={weightUnit}
                setDisabled={setDisabled}
            />
            <section className='flex items-center gap-5 mt-12'>
                <button 
                    className='bg-blue-300 border-slate-300'
                    onClick={putCartHandler}
                >
                    Put Cart
                </button>
                <button>Buy Now</button>
            </section>
            </>}
            {showConfirmCart && <ConfirmCart
            />}
        </div>
    )
}

export default CartContents