import { useState } from 'react';
import { ProductProps } from '../../types/ProductProps'
import ConfirmCart from './ConfirmCart';
import ProductWeightOption from '../ProductWeightOption';
import { toast } from 'react-toastify';


const CartContents = ({
    name,
    price,
    weight,
    weightUnit,
}: ProductProps) => {
    const [showConfirmCart, setShowConfirmCart] = useState(false);
    const [disabled, setDisabled] = useState(true);
    
    const putCartHandler = () => {
        if (disabled) {
            toast.warn("옵션을 선택해주세요")
            setShowConfirmCart(false);
        } else {
            
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