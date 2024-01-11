// import { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface SecondProps {
    itemId: number;
    image: string;
    itemName: string;
    totalPrice: number;
    itemCount: number;
    itemOption: string;
    stock: number;
    maxPoint: number;
    pointValue: string;
    setPointValue: (usePoint: any) => string;
}

const SecondCard = ({
    itemId,
    image,
    itemName,
    totalPrice,
    itemCount,
    itemOption,
    stock,
    maxPoint,
    pointValue,
    setPointValue,
}: SecondProps) => {
    const [realUsePoint, setRealUsePoint] = useState(pointValue);
    const navigate = useNavigate();

    let showStock = '';
    showStock = (stock >= 5) ? '재고 5개 이상' : `재고 ${stock} 남음`;

    const pointHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setRealUsePoint(e.target.value);
        
        if (realUsePoint === '0') {
            setPointValue(e.target.value.replace(/(^0+)/, ""));
            console.log("눈치가 빠른 꼬맹이구나");
            
        } else {
            if (Number(e.target.value) > maxPoint) {
                toast.error('보유한 포인트를 초과하였습니다!')
                setPointValue(String(maxPoint));
            } else {
                setPointValue(e.target.value);
            }
        }
    }

    return (
        <tr>
            <td className="grid grid-flow-col grid-rows-3">
                <span 
                    className="flex items-center justify-center row-span-3 hover:cursor-pointer"
                    onClick={() => navigate(`/products/${itemId}`)}
                >
                    <img src={image} alt={image} className="object-cover w-20 h-24 rounded-md"/>
                </span>
                <span className="flex-row col-span-2">
                    <p className="mb-2 font-bold">{itemName}</p>
                    <p className="text-xs font-light text-gray-400">옵션:{itemOption}/{showStock}</p>
                </span>

                <div className="flex items-center py-2">
                    <p className="w-24 font-bold">적립금 사용</p>
                    <div className="relative col-span-2 row-span-2">
                        <input 
                            className="w-40 px-8 py-1 text-right border"
                            type="number" 
                            value={realUsePoint}
                            onChange={pointHandler}
                        />
                        <label className="absolute top-[5px] right-2">원</label>
                    </div>
                
                    <div className="pl-4 text-sm font-light text-slate-400 whitespace-nowrap">
                        사용 가능한 적립금(
                        <span className="text-blue-400">{maxPoint}</span>원)
                    </div>
                </div>
            </td>
            <td className="text-center">{itemCount}</td>
            <td className="text-center">{(totalPrice/20)}</td>
            <td className="text-center">{totalPrice}</td>
        </tr>
    )
}

export default SecondCard