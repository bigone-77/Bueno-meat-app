import { IconType } from "react-icons";
import ShowStars from "../utils/ShowStars";
import { FaStar } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

import { toast } from "react-toastify";
import { useState } from 'react';
import axios from 'axios';


interface ReviewListProps {
    profileIcon: IconType;
    reviewId: number;
    userName: string;
    starRating: number;
    date: string;
    comment: string;
    img?: string;
    recommend: number;
    fetchData: () => Promise<void>;
}

const ReviewList = ({
    profileIcon: Icon,
    reviewId,
    userName,
    starRating,
    date,
    comment,
    img,
    recommend,
    fetchData
}: ReviewListProps) => {

    const memberId = useSelector((state: RootState) => state.currentUser.id);

    const [isRecommended, setIsRecommended] = useState(false);

    const recommendHandler = async () => {
        if (isRecommended) {    // 파란색 눌렀을 때
            await axios.patch(`/review/${memberId}/${reviewId}`)
                .then(response => {
                    toast.success('따봉을 취소했습니다.');
                    fetchData();
                })
                .catch(error => {
                    toast.error(error.response.data.message);
                    fetchData();
                })
        } else // 검정색 눌렀을때 (처음 눌렀을때)
        {
            await axios.post(`/review/recommend/${memberId}/${reviewId}`)
                .then(resposne => {
                    console.log(resposne.data);
                    toast.success('따봉을 눌렀어요!');
                    setIsRecommended(true);
                    fetchData();
                })
                .catch(error => {   // 자기꺼 자기가 눌렀을때 나오는 500에러 
                    // toast.error(error.response.data.message);
                    toast.error("자신의 리뷰글에는 추천을 누를 수 없습니다");
                    setIsRecommended(false); // 버튼을 계속 검정색으로 만들기
                    fetchData();
                })
        }
    }
    
    return (
        <div className="px-4 py-8 border rounded-md">
            <div className="flex items-center gap-5 mb-10">
                <Icon size={50} />
                <span className="flex flex-col gap-2">
                    <p className="text-lg font-bold">{userName}</p>
                    <ShowStars 
                        starNum={starRating}
                        fillStar={FaStar}
                        size={18}
                    />
                    <p className="text-sm font-semibold text-slate-400">{date.slice(0, 10)}</p>
                </span>
            </div>

            <span>
                <img src={img} alt={img} className="object-cover w-20 h-24 rounded-md"/>
                <p className="my-10">{comment}</p>
            </span>

            <span className="flex items-center gap-1 text-center">
                <p className="pr-4">{recommend} 명에게 도움됨</p>
                <FaThumbsUp 
                    onClick={() => recommendHandler()}
                    size={25} 
                    color={isRecommended ? 'blue' : ''}
                    className='cursor-pointer'
                />
            </span>
        </div>
    )
}

export default ReviewList