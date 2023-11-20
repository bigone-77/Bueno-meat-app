import { useParams } from 'react-router-dom'
import Container from '../../components/Container'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import EmptyState from '../../components/EmptyState';
import SubDiv from '../../components/SubDiv';
import ProductLabel from '../../components/ProductLabel';
import CountButton from '../../components/CountButton';
import React, { useState } from 'react';

import { IoIosArrowForward } from "react-icons/io";
import SelectedBox from '../../components/SelectedBox';

const ProductDetailPage = () => {
    const [showTable, setShowTable] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [count, setCount] = useState(1);


    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value.length);
        
        setSelectedOption(e.target.value);
    }

    const params = useParams();
    const productData = useSelector((state: RootState) => state.product);

    const detailProductData = productData.find((product) => product.id === parseInt(params.productId!)); 
    
    if (detailProductData) {
        let { title, description, price, imageURL } = detailProductData;
        return (
            <Container>
                <div className='grid grid-cols-1 gap-5 mt-56 sm:grid-cols-2'>

                    <img src={imageURL} alt='product-img' className='w-[480px] h-[580px]' />

                    
                    <div>
                        <hr className='w-full h-1 mb-10 bg-black' />
                        <section className='flex flex-col items-start justify-center gap-5'>
                            <p className='text-3xl font-Cafe24Shiningstar'>{title}</p>
                            <hr/>
                            <p className='font-semibold text-gray-500'>{description}</p>
                            <hr />
                            <SubDiv 
                                firstTitle="PRICE"
                                subTitle={price}
                            />
                            <SubDiv 
                                firstTitle='Point'
                                subTitle='1%'
                            />
                            <hr />
                            <span className='flex items-center justify-center'>
                                <IoIosArrowForward />
                                <p>중량 선택</p>
                                <SelectedBox 
                                    price={price}
                                    selectedOption={selectedOption}
                                    handleSelect={handleSelect}
                                />
                                <p>{selectedOption}</p>
                            </span>
                            {showTable && <table className='w-full border-2 border-b-0 border-collapse border-black'>
                                <thead>
                                    <tr>
                                        <td>상품명</td>
                                        <td>상품수</td>
                                        <td>가격</td>
                                    </tr>
                                </thead>
                                <tbody className='border-transparent'>
                                    <tr>
                                        <td>
                                            <ProductLabel
                                                title={title}
                                            />
                                        </td>
                                        <td>
                                            <CountButton
                                                count={count}
                                                setCount={setCount}
                                            />
                                        </td>
                                        <td>
                                            <p>{count*price}원</p>
                                            <p>{count*price/100}포인트</p>
                                        </td>
                                    </tr>
                                </tbody>
                                
                            </table>}
                        </section>
                    </div>
                </div>
        </Container>
        )
    } else {
        return (
            <EmptyState 
                title="MEAT NOT FOUND"
                subTitle="해당 관련된 상품이 없습니다."
            />
        )
    }

    
    
}

export default ProductDetailPage