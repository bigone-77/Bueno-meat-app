import { useCallback, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

import { AiFillFire } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setProduct } from "../redux/slices/productSlice";

interface RowProps {
    title: string;
    fetchUrl: string;
}

const Row = ({
    title,
    fetchUrl
}: RowProps) => {

    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product);
    
    const fetchProductData = useCallback(async () => {
        try {
            const response = await axios.get(`${fetchUrl}`);
            console.log(response.data.length);
            
            dispatch(setProduct(response.data))
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    }, [fetchUrl, dispatch]);
    
    useEffect(() => {
        fetchProductData();
    }, [fetchProductData])
        
    return (
        <div className="px-10">
            <p className="mb-10 text-5xl font-Cafe24Shiningstar">{title}</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {products.map(product => (
                    <span key={product.id}>
                        <ProductCard 
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            imageURL={product.imageURL}
                            icon={AiFillFire}
                        />
                    </span>
                ))}
            </div>
        </div>
    )

}

export default Row