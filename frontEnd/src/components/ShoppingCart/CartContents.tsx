import { useState } from 'react';
import { ProductProps } from '../../types/ProductProps'
import CountButton from '../utils/CountButton';

import { TbMoneybag } from "react-icons/tb";
import { LiaWindowCloseSolid } from "react-icons/lia";
import ConfirmCart from './ConfirmCart';

const CartContents = ({
    name,
    image,
    price,
    info,
}: ProductProps) => {
    const [count, setCount] = useState(1);

    const [showConfirmCart, setShowConfirmCart] = useState(false);
    
    return (
        <div>
            {!showConfirmCart && <>
            <p className='my-5 text-2xl font-bold'>{info}</p>
            <hr className="h-1 bg-gray-200" />
            <section className='grid items-center grid-cols-2 gap-2 mt-4'>
                <img src={image} alt='product-img' className='rounded-md w-44 h-52'/>
                <p className='font-semibold text-slate-200'>{info}</p>
            </section>
            <hr className="h-1 my-5 bg-gray-200" />
            <section className='flex items-center justify-between'>
                <p>{name}</p>
                
                <div className='grid items-center grid-cols-3 gap-2'>
                    <div className='flex items-center gap-5'>
                        <LiaWindowCloseSolid 
                            size={20} 
                            onClick={() => setCount(1)}
                        />
                        <CountButton 
                            count={count}
                            setCount={setCount}
                        />
                    </div>
                    <p>{price*count}원</p>
                    <span className='flex items-center gap-2'>
                        <TbMoneybag size={20}/> 
                        <p>{price*count/100}P</p>
                    </span>
                </div>
            </section>
            <hr className='h-1 my-5 bg-gray-200'/>
            <section className='flex items-center gap-5'>
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