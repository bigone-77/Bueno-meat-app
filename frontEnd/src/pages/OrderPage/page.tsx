import { useEffect, useState } from "react";
import First from "../../components/Member/Order/First";
import SecondCard from "../../components/Member/Order/Second";
import Third from "../../components/Member/Order/Third";
import Container from "../../components/utils/Container"
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { OrderMemberInfoProps } from "../../types/Order/OrderMemberInfoProps";
import { OrderItemListProps } from "../../types/Order/OrderItemListProps";
import EmptyState from "../../components/utils/EmptyState";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const OrderPage = () => {
    const navigate = useNavigate();

    const memberId = useSelector((state: RootState) => state.currentUser.id);
    const memberEmail = useSelector((state: RootState) => state.editUser.email);

    const [userData, setUserData] = useState<OrderMemberInfoProps>();
    const [productData, setProductData] = useState<OrderItemListProps[]>([]);
    const [memo, setMemo] = useState('');   // memo
    const [pointValue, setPointValue] = useState('');   // 사용한 포인트 값
    const [finalPrice, setFinalPrice] = useState(0);    // 최종 주문 금액

    const fetchData = async () => {
        axios.get(`/order/${memberId}`)
        .then ((response) => {
            setUserData(response.data.orderMemberInfo);
            setProductData(response.data.orderItemList);
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    if (userData && productData) {
        const priceSum = productData.map((data) => data.totalPrice).reduce((a,b) => a + b);

        
        const postHandler = async () => {
            const itemAndCount: Map<string, number> = new Map();
            productData.forEach(item => {
                const { itemName, itemCount } = item;
                itemAndCount.set(itemName, itemCount);
            });

            const data = {
                    "memo": memo,
                    itemAndCount: itemAndCount,
                    "address": userData.address,
                    "detailAddress": userData.detailAddress,
                    "recipient": userData.name,
                    "email": memberEmail,
                    "phone": userData.phone,
                    "usePoint": Number(pointValue),
                    "totalPrice": finalPrice,
                };


            console.log(data);
            
            
            await axios.post(`/order/${memberId}`, JSON.stringify(data), {
                    headers: {
                    'Content-Type': 'application/json', // 요청 헤더에 JSON 형식임을 명시
                    }
                })
                .then(response => {
                    console.log(response.data);
                    toast.success("주문이 완료되었습니다!");
                    navigate('/');
                })
                .catch(error => {
                    console.log(error);
                })
        }

        return (
            <Container>
                <div className="px-10 py-5">
                    <p className="text-7xl font-Cafe24Shiningstar">Order</p>
                    <hr className="my-10"/>

                    <p className="text-2xl font-bold">배송 정보</p>

                    <First 
                        name={userData.name}
                        phone={userData.phone}
                        address={userData.address}
                        detailAddress={userData.detailAddress}
                        memo={memo}
                        setMemo={setMemo}
                    />
                    
                    <div className="mb-16" />

                    <p className="text-2xl font-bold">상품 정보</p>

                    <div className="mb-10" />

                    <table className="table-fixed w-full border-separate rounded-[20px] overflow-hidden">
                        <thead>
                            <tr className="bg-[rgba(0,0,0,0.1)]">
                                <th
                                    scope="col"
                                    className="hover:bg-[rgba(0,0,0,0.2)] w-3/5"
                                >
                                    상품정보
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
                                    적립금
                                </th>
                                
                                <th
                                    scope="col"
                                    className="hover:bg-[rgba(0,0,0,0.2)]"
                                >
                                    주문금액
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {productData.map((product, index) => ( 
                                <SecondCard 
                                    key={index}
                                    itemId={product.itemId}
                                    image={product.image}
                                    itemName={product.itemName}
                                    totalPrice={product.totalPrice}
                                    itemCount={product.itemCount}
                                    itemOption={product.itemOption}
                                    stock={product.stock}
                                />
                            ))}
                        </tbody>
                    </table>

                    <div className="mb-16" />

                    <p className="text-2xl font-bold">최종 결제 금액</p>
                    
                    <Third 
                        point={userData.point}
                        priceSum={priceSum}
                        setFinalPrice={setFinalPrice}
                        pointValue={pointValue}
                        setPointValue={setPointValue}
                    />
                    <div className="mb-10" />
                    
                    <div className="flex items-center justify-center my-16">
                        <button 
                            className="w-40 text-white bg-blue-400"
                            onClick={() => postHandler()}
                        >
                            {finalPrice}원 결제하기
                        </button>
                    </div>
                </div>
            </Container>
        )
    } else {
        return (
            <EmptyState 
                title="ORDER NOT FOUND"
                subTitle="해당 관련된 주문이 없습니다."
            />
        )
    }
}

export default OrderPage