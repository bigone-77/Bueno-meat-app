import CartItem from "./CartItem"

const Cart = () => {
    const cartData = [{
        number: 1,
        productImg: "/cow4.jpg",
        productName: "맛있는 고기",
        option: "450g(+15000원)",
        productPrice: 120000,
        productCount: 1,
        resultPrice: 120000,
        point: 1200,
    }];

    return (
        <div className='mt-10 ml-52'>
            <p className="text-5xl font-bold text-start">장바구니</p>
            <hr className="h-1 my-5 bg-black" />
            <table className="table-fixed w-full border-separate rounded-[20px] overflow-hidden">
                <thead>
                    <tr className="bg-[rgba(0,0,0,0.1)]">
                    <th
                        scope="col"
                        className="w-24 hover:bg-[rgba(0,0,0,0.2)]"
                    >
                        전체 {cartData.length}개
                    </th>

                    <th
                        scope="col"
                        className="hover:bg-[rgba(0,0,0,0.2)] w-7"
                    >
                        <input type="checkbox" />
                    </th>

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
                    {cartData.map((data, index) => (
                        <CartItem 
                            key={index}
                            idx={index + 1}
                            img={data.productImg}
                            name={data.productName}
                            option={data.option}
                            price={data.productPrice}
                            count={data.productCount}
                            resultPrice={data.resultPrice}
                            point={data.point}
                        />
                    ))}
                    {/* <CartItem /> */}
                </tbody>
                </table>
        </div>
    )
}

export default Cart