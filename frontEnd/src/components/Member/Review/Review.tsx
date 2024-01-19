import ReviewProfile from "./ReviewProfile"
import { useSelector } from "react-redux"
import Posted from "./Posted"
import { useGetReviewQuery } from '../../../redux/api/reviewApi'
import { RootState } from '../../../redux';


export interface PatchDataProps {
    starRating: number;
    comment: string;
    reviewImage: string | null;
}

const Review = () => {
    const memberId = useSelector((state: RootState) => state.currentUser.id);
    const { 
        data,
        isLoading, 
        error 
    } = useGetReviewQuery(memberId);

    if (isLoading) {
        return <h3>Loading...</h3>
    }  
    if (data) {
        return (
            <div className='my-10 ml-52'>
                <p className="text-5xl font-bold text-start">리뷰관리</p>
                <ReviewProfile 
                    nickname={data.reviewUserInfo.username}
                    recommendNum={data.reviewUserInfo.recommend}
                />
                <div className="mt-10"/>
                <p className="text-3xl font-bold">작성한 리뷰 {data.itemInfos.length}</p>
                <hr className="my-10 bg-black"/>
                {data.itemInfos.map((product, index) => (
                    <Posted 
                        key={index}
                        comment={product.comment}
                        reviewId={product.reviewId}
                        itemId={product.itemId}
                        itemImage={product.itemImage}
                        itemName={product.itemName}
                        reviewImage={product.reviewImage}
                        reviewTime={product.reviewTime}
                        starRating={product.starRating}
                    />
                ))}
            </div>
        );
    
                }
    return <p>나 집에 돌아갈래</p>;
}

export default Review;
