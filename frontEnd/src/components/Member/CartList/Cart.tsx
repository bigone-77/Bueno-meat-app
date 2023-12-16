import { useSelector } from "react-redux"
import { RootState } from "../../../redux"
import { useCallback, useEffect, useState } from "react"
import { CartDataProps } from "../../../types/CartDataProps"
import CartItem from "./CartItem"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const navigate = useNavigate();
    const [cartData, setCartData] = useState<CartDataProps[]>([]);
    // const [itemIdList, setItemIdList] = useState<number[]>([]); // itemIdList
    
    const memberId = useSelector((state: RootState) => state.currentUser.id);
    
    const fetchData = async () => {
        await axios.get(`/mypage/cart/${memberId}`)
            .then((response) => {
                setCartData(response?.data);
            })
            .catch(error => {
                console.log(error);    
            })
    }

    const patchHandler = async (id: number, newCount: number) => {
        
        await axios.patch(`/mypage/cart/${memberId}/${id}`, newCount, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            toast.success(response.data);
        }).catch(error => {
            toast.error('수량 변경에 실패했습니다')
        })
    }

    const deleteHandler = useCallback(async (productId?: number) => {
        if(window.confirm("상품을 삭제하시겠습니까?")) {
                try {
                    if (typeof productId === "number") {
                        await axios.delete(`/mypage/cart/${memberId}/${productId}`);
                        toast.success("장바구니에서 삭제되었습니다.");
                    } else {
                        await axios.delete(`/mypage/cart/${memberId}`);
                        toast.success("장바구니 상품이 전체 삭제되었습니다.")
                    }
                    fetchData();
                } catch (error) {
                    console.log(error);
                    toast.error("삭제 중 오류가 발생했습니다.");
                }
            }
    }, []);
    
    useEffect(() => {
        fetchData();
    }, [deleteHandler, patchHandler]);


    // const checkedItemHandler = (id: number, isChecked: boolean) => {
    //     if (isChecked) {
    //         setItemIdList((prev) => [...prev, id]);
    //     } else {
    //         setItemIdList(itemIdList.filter((item) => item !== id));
    //     }
    // };
    
    // const allCheckedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.checked) { 
    //         setItemIdList(cartData.map((item) => item.itemId));
            
    //     } else {
    //         setItemIdList([]);
    //     }
    // };
    
    // console.log(itemIdList);
    

    return (
        <div className='my-10 ml-52'>
            <p className="text-5xl font-bold text-start">장바구니</p>
            <hr className="h-1 my-5 bg-black" />
            <table className="table-fixed w-full border-separate rounded-[20px] overflow-hidden">
                <thead>
                    <tr className="bg-[rgba(0,0,0,0.1)]">
                    <th
                        scope="col"
                        className="w-24 hover:bg-[rgba(0,0,0,0.2)]"
                    >
                        전체 {cartData?.length}개
                    </th>

                    {/* <th
                        scope="col"
                        className="hover:bg-[rgba(0,0,0,0.2)] w-7"
                    >
                        <input type="checkbox" onChange={allCheckedHandler} 
                            checked={itemIdList.length === cartData.length ? true : false}
                        />
                    </th> */}

                    <th
                        scope="col"
                        className="hover:bg-[rgba(0,0,0,0.2)] w-52"
                    >
                        상품명(옵션)
                    </th>
                    <th
                        scope="col"
                        className="hover:bg-[rgba(0,0,0,0.2)]"
                    >
                        판매가
                    </th>
                    <th
                        scope="col"
                        className="hover:bg-[rgba(0,0,0,0.2)]"
                    >
                        수량
                    </th>
                    
                    <th
                        scope="col"
                        className="hover:bg-[rgba(0,0,0,0.2)]"
                    >
                        주문금액(적립예정)
                    </th>
                    
                    <th
                        scope="col"
                        className="hover:bg-[rgba(0,0,0,0.2)]"
                    >
                        주문관리
                    </th>
                    </tr>
                </thead>

                <tbody>
                    {cartData?.map((data, index) => (
                        <CartItem 
                            key={data.itemId}
                            idx={index + 1}
                            memberId={memberId}
                            id={data.itemId}
                            img={data.image}
                            name={data.itemName}
                            option={data.itemOption}
                            count={data.itemCount}
                            resultPrice={data.totalPrice}
                            stock={data.stock}
                            deleteHandler={deleteHandler}
                            patchHandler={patchHandler}
                            // checkedItemHandler={checkedItemHandler}
                            // checked={itemIdList.includes(data.itemId) ? true : false}
                        />
                    ))}
                </tbody>
                </table>
                <hr />
                <div className="flex items-center gap-10 mt-10">
                    <button onClick={() => deleteHandler()}>전체삭제</button>
                    <button 
                        className="text-white bg-black"
                        onClick={() => navigate('/order')}
                    >
                        주문하기
                    </button>
                </div>
        </div>
    )
}

export default Cart