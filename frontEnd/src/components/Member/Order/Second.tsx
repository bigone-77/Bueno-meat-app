import { useNavigate } from "react-router-dom";

interface SecondProps {
    itemId: number;
    image: string;
    itemName: string;
    totalPrice: number;
    itemCount: number;
    itemOption: string;
    stock: number;
}

const SecondCard = ({
    itemId,
    image,
    itemName,
    totalPrice,
    itemCount,
    itemOption,
    stock,
}: SecondProps) => {

    const navigate = useNavigate();

    let showStock = '';
    showStock = (stock >= 5) ? '재고 5개 이상' : `재고 ${stock} 남음`;

    return (
        <tr>
            <td 
                className="flex items-center justify-start gap-2 text-center hover:cursor-pointer"
                onClick={() => navigate(`/products/${itemId}`)}>
                <span className="items-center">
                    <img src={image} alt={image} className="object-cover w-12 h-16"/>
                </span>
                <span className="text-start">
                    <p className="mb-2 font-bold">{itemName}</p>
                    <p className="text-xs font-light text-gray-400">옵션:{itemOption}/{showStock}</p>
                </span>
            </td>
            <td className="text-center">{itemCount}</td>
            <td className="text-center">{(totalPrice/20)}</td>
            <td className="text-center">{totalPrice}</td>
        </tr>
    )
}

export default SecondCard