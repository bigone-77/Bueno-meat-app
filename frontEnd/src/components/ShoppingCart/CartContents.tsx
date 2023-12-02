import { useState } from 'react';
import { ProductProps } from '../../types/ProductProps'
import ConfirmCart from './ConfirmCart';
import ProductWeightOption from '../ProductWeightOption';


const CartContents = ({
    name,
    price,
    weight,
    weightUnit,
}: ProductProps) => {
    const [showConfirmCart, setShowConfirmCart] = useState(false);
    
    return (
        <div>
            {!showConfirmCart && <>
            <p className='my-2 text-2xl font-bold'>{name}</p>
            
            <ProductWeightOption 
                price={price}
                weight={weight}
                weightUnit={weightUnit}
            />
            <section className='flex items-center gap-5 mt-12'>
                <button 
                    className='bg-blue-300 border-slate-300'
                    onClick={() => setShowConfirmCart(true)}
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