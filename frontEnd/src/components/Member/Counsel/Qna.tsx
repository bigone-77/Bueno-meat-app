import { useState } from "react"
import QuestionList from "./\bQuestionList"
import QnaList from "./QnaList"

const dummyQnaData = [{
    "qnaId": 1,
    "itemImg": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_4332.jpg",
    "itemName": "손흥양",
    "itemOption": "300g",
    "comment": "어르신들 드실 갈비탕 준비하려는데 탕으로도 괜찮을까요",
    "qnaDate": "2023-12-28",
    "answer": ""    // qnaId가 1인 문의글에 대한 답변(admin)
}]

const Qna = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="my-10 ml-52">
            <p className="text-5xl font-bold text-start">문의내역 확인</p>
            <hr className="h-1 my-5 bg-black" />
            
            <div className="grid grid-cols-3 p-2 border">
                <div className="col-span-1 border-r-2">
                    {dummyQnaData.length > 0 ? 
                        <>
                            {dummyQnaData.map((data, index) => (
                                <QuestionList 
                                    key={index}
                                    id={data.qnaId}
                                    img={data.itemImg}
                                    itemName={data.itemName}
                                    date={data.qnaDate}
                                    answer={data.answer}
                                    isClicked={isClicked}
                                    setIsClicked={setIsClicked}
                                />
                            ))}
                        </>
                        :
                        <div>
                            <p className="text-lg text-center text-gray-400 mt-28">최근 문의내역이 없습니다.</p>
                        </div>
                    }
                </div>
                <div className="col-span-2 pl-2">
                    {isClicked ? 
                        <QnaList /> 
                        :
                        <div>
                            <div className="flex items-center p-2">
                                <p className="text-2xl font-semibold text-slate-200">고객센터 문의</p>
                            </div>
                            <hr className="mt-[28px]"/>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Qna