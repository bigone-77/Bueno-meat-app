import { GrRadialSelected } from 'react-icons/gr'

interface FirstProps {
    name: string;
    phone: string;
    address: string;
    detailAddress: string;
    memo: string;
    setMemo: React.Dispatch<React.SetStateAction<string>>
}

const First = ({
    name,
    phone,
    address,
    detailAddress,
    memo,
    setMemo,
}: FirstProps) => {
    const selectedMemo = [
        {
            id: 1,
            value: "부재 시 경비실에 맡겨주세요"
        },
        {
            id: 2,
            value: "부재 시 택배함에 넣어주세요"
        },
        {
            id: 3,
            value: "부재 시 집 앞에 놔주세요"
        },
        {
            id: 4,
            value: "배송 전 연락 바랍니다"
        },
    ]


    return (
        <div className="mt-10 border border-black">
            <div className="flex items-center px-3 py-2">
                <p className="w-24 font-bold">배송지</p>
                <GrRadialSelected size={30} className="pr-2"/>
                <p className="w-1/4 text-sm font-semibold">{name}님 배송지</p>
                <button className="w-24 px-2 py-2">배송지 변경</button>
            </div>

            <hr />

            <div className="flex items-center px-3 py-2">
                <p className="w-24 font-bold">이름/연락처</p>
                <p className="w-1/4 text-sm font-semibold">{name} | {phone}</p>
            </div>

            <hr />

            <div className="flex items-center px-3 py-2">
                <p className="w-24 font-bold">주소</p>
                <p className="text-sm font-semibold">{address} + {detailAddress}</p>
            </div>

            <hr />

            <div className="flex items-center px-3 py-2">
                <p className="w-24 font-bold">배송 요청사항</p>
                <select 
                    className='px-2 py-1 ml-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
                    value={memo} 
                    onChange={(e) => setMemo(e.target.value)}
                >
                    <option value="-1">배송 시 요청사항을 선택해주세요</option>
                    {selectedMemo.map((item) => (
                        <option key={item.id} value={item.value}>
                            {item.value}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default First