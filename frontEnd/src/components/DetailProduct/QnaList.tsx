import { QnaDataProps } from "../../types/DetailProduct/QnaDataProps"

const QnaList = ({
    qnaId,
    title,
    comment,
    qnaDate,
    qnaStatus
}: QnaDataProps) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 mb-5">
                <span className={`px-2 py-1 ${qnaStatus === "WAITING" ? 'bg-gray-200' : 'bg-blue-200'} rounded-md`}>
                    {qnaStatus === "WAITING" ? 
                        <p className="text-sm font-bold">답변준비중</p>
                        :
                        <p className="text-sm font-bold">답변완료</p>
                    }
                </span>
                    <p className="text-sm font-semibold ">{title}</p>
                </div>
                <p className="text-sm">{qnaDate}</p>
            </div>
            <p>{comment}</p>
            <hr className="my-5"/>
        </div>
    )
}

export default QnaList