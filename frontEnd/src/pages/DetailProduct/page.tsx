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
import useExtractedNumber from '../../utils/useExtractedNumber';

const ProductDetailPage = () => {
    const [showTable, setShowTable] = useState(false);
    const [selectedPlusPrice, setSelectedPlusPrice] = useState('');
    const [count, setCount] = useState(1);


    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlusPrice(e.target.value);
        setShowTable(true);
    }

    let extractedPrice = 0;
    extractedPrice = useExtractedNumber(selectedPlusPrice);


    const params = useParams();
    const productData = useSelector((state: RootState) => state.product);

    const detailProductData = productData.find((product) => product.id === parseInt(params.productId!)); 

    if (detailProductData) {
        let { title, description, price, weightCount, weightUnit, imageURL } = detailProductData;

        // 최종상품금액
        let resultPrice = extractedPrice === 0 ? price*count : (extractedPrice + price)*count;
        
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
                                    weightCount={weightCount || 0} 
                                    weightUnit={weightUnit || ''}
                                    selectedPlusPrice={selectedPlusPrice}
                                    handleSelect={handleSelect}
                                />
                            </span>
                            <hr />
                            <p className='text-sm font-semibold text-gray-500'>최소주문수량 1개 이상</p>
                            {showTable && <table className='w-full border-2 border-b-0 border-collapse border-black rounded-md'>
                                <thead>
                                    <tr>
                                        <td>상품명</td>
                                        <td>상품수</td>
                                        <td>가격</td>
                                    </tr>
                                </thead>
                                <tbody className='border-transparent border-none'>
                                    <tr>
                                        <td>
                                            <ProductLabel
                                                selectedOption={selectedPlusPrice}
                                            />
                                        </td>
                                        <td>
                                            <CountButton
                                                count={count}
                                                setCount={setCount}
                                            />
                                        </td>
                                        <td className='flex items-center gap-2 text-xl font-Cafe24Shiningstar'>
                                            <p>{resultPrice}원</p>
                                            <p>({resultPrice/100} Point)</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>}
                            <hr />
                            {showTable && <>
                                <span className='flex items-center justify-end w-full'>TOTAL: 
                                    <p className='pl-2 text-lg font-bold'>{resultPrice}</p>
                                    원 ({count}개)
                                </span>
                                <hr />
                            </>}
                            
                            <span className='grid w-full grid-cols-3 gap-3'>
                                <button className='bg-blue-500'>바로구매</button>
                                <button>장바구니</button>
                                <button>관심상품</button>
                            </span>
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