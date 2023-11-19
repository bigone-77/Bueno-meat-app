import { IconType } from "react-icons"
import { ProductProps } from "../types/ProductProps"
import CartButton from "./ShoppingCart/CartButton";
import { useNavigate } from "react-router-dom";

interface ProductCardProps extends ProductProps {
    icon: IconType;
}

const ProductCard = ({
    id,
    title,
    price,
    imageURL,
    icon: Icon 
}: ProductCardProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${id}`);
    }

    return (
        <div className="cursor-pointer" onClick={handleClick} >
            <div className="relative border rounded-lg w-[286px] h-[320px] bg-gray-200">
                <Icon 
                    size={25} 
                    className="absolute top-2 left-3"
                />
                <img src={imageURL} alt="bueno-img" className="px-2 pt-12 object-fit" />
                <div className="absolute bottom-3 right-3">
                    <CartButton 
                        productId={id}
                    />
                </div>
            </div>
            <span className="flex flex-col items-start justify-center mt-4">
                <p className="text-2xl font-bold">{title}</p>
                <p className="font-semibold text-zinc-700">{`${price}원`}</p>
            </span>
        </div>
    )
}

export default ProductCard