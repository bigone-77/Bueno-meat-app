import { useState } from "react"
import Posted from "./Posted";
import Posting from "./Posting";
import { useNavigate } from "react-router-dom";

interface ReviewProductProps {
    id: number;
    name: string;
    option: string;
    img: string;
    date: string;
}

const ReviewSelect = ({
    id,
    name,
    option,
    img,
    date
}: ReviewProductProps) => {
    const [selected, setSelected] = useState(true);
    const [showReviewForm, setShowReviewForm] = useState(false);

    const navigate = useNavigate();

    const selectedToggleHandler = () => {
        setSelected(!selected)
    }

    return (
        <>
        <table className="w-full table-fixed">
            <thead className="border-2 border-t-black">
                <tr>
                    <th 
                        className={`py-5 font-bold border-r-2 border-r-gray-300 hover:cursor-pointer hover:opacity-60 ${selected ? 'bg-transparent' : 'bg-slate-100'}`}
                        onClick={selectedToggleHandler}
                    >
                        리뷰 작성
                    </th>
                    <th 
                        className={`py-5 font-bold ${selected ? 'bg-slate-100' : 'bg-transparent'} hover:cursor-pointer hover:opacity-60`}
                        onClick={selectedToggleHandler}
                    >
                        작성한 리뷰
                    </th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        {selected ? 
            <>
            {showReviewForm && <div className="my-10">
                    <p className="text-lg font-bold">구매후기 쓰기</p>
                    <hr className="my-5"/>
                </div>}
                <div className="flex items-center justify-between pr-20 mt-10">
                    <div className="flex items-center justify-center">
                        <span 
                            className="hover:cursor-pointer" 
                            onClick={() => navigate(`/products/${id}`)}
                        >
                            <img src={img} alt={img} className="object-cover h-32 w-28"/>
                        </span>
                        <span className="flex flex-col ml-6 text-start">
                            <p className="mb-2 text-2xl font-bold">{name}</p>
                            <p className="mb-10 text-sm font-semibold">{option}</p>
                            <p className="font-light text-gray-400 text-small">{date} 구매함</p>
                        </span>
                    </div>
                    <div>
                        <button 
                            className={`px-4 py-4 bg-blue-300 hover:border-white ${showReviewForm && 'hidden'}`}
                            onClick={() => setShowReviewForm(true)}
                        >리뷰 작성하기</button>
                    </div>
                </div>
                <hr className="my-10"/>
                {showReviewForm && <Posting />}
            </>
                :
                <Posted />}
            </>
    )
}

export default ReviewSelect