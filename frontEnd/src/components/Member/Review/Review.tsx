import ReviewProfile from "./ReviewProfile"
import ReviewSelect from "./ReviewSelect"

const userData = {
    nickName: "토미",
    recommendNum: 3,
}

const productData = {
    id: 4,
    name: "소쯔아기",
    option: "300g(+6400원)",
    img: "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/cow/cow1.jpg",
    date: "2023-07-07"
}

const Review = () => {
    return (
        <div className='my-10 ml-52'>
            <p className="text-5xl font-bold text-start">리뷰관리</p>
            <ReviewProfile 
                nickname={userData.nickName}
                recommendNum={userData.recommendNum}
            />
            <div className="mt-10"/>
            <ReviewSelect 
                id={productData.id}
                name={productData.name}
                option={productData.option}
                img={productData.img}
                date={productData.date}
            />
        </div>
    )
}

export default Review