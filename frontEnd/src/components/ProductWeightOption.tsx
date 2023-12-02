import { IoIosArrowForward } from "react-icons/io"
import SelectedBox from "./utils/SelectedBox"
import useExtractedNumber from "../utils/useExtractedNumber";
import { useState } from "react";
import ProductLabel from "./ProductLabel";
import CountButton from "./utils/CountButton";

interface ProductWeightOptionProps {
    price: number;
    weight?: number;
    weightUnit?: string;
}

const ProductWeightOption = ({
    price, 
    weight,
    weightUnit,
}: ProductWeightOptionProps) => {
    const [showTable, setShowTable] = useState(false);
    const [selectedPlusPrice, setSelectedPlusPrice] = useState('');
    const [count, setCount] = useState(1);


    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlusPrice(e.target.value);
        setShowTable(true);
    }

    let extractedPrice = 0;
    extractedPrice = useExtractedNumber(selectedPlusPrice);

    let resultPrice = extractedPrice === 0 ? price*count : (extractedPrice + price)*count;
    return (
        <>
            <span className='flex items-center justify-center'>
                <IoIosArrowForward />
                <p>중량 선택</p>
                <SelectedBox 
                    price={price}
                    weightCount={weight || 0} 
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
                            
        </>
    )
}

export default ProductWeightOption