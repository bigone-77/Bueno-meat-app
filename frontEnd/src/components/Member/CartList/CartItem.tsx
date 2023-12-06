interface CartItemProps {
    idx: number;
    img: string;
    name: string;
    option: string;
    price: number;
    count: number;
    resultPrice: number;
    point: number;
}

const CartItem = ({
    idx,
    img,
    name,
    option,
    price,
    count,
    resultPrice,
    point
}: CartItemProps) => {
    
    return (
        <tr>
            <td className="pl-2 text-center">{idx}</td>
            <td className="text-center">
                <input type="checkbox" />
            </td>
            <td className="flex items-center justify-start gap-2 text-center">
                <span className="items-center">
                    <img src={img} alt={img} className="object-cover w-12 h-16"/>
                </span>
                <span className="text-start">
                    <p className="mb-2 font-bold">{name}</p>
                    <p className="text-sm font-light text-gray-400">옵션:{option}</p>
                </span>
            </td>
            <td className="text-center">{price}</td>
            <td className="text-center">{count}</td>
            {/* <td className="text-center">120,000(1200P)</td> */}
            <td className="text-center">{resultPrice}({point})</td>
            <td>
                <button>삭제하기</button>
            </td>
        </tr>
    )
}

export default CartItem