import { QnaDataProps } from "../../types/DetailProduct/QnaDataProps"

const QnaList = ({
    qnaId,
    itemOption,
    comment,
    qnaDate
}: QnaDataProps) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 mb-5">
                    <label className="px-5 py-2 text-white rounded-md bg-slate-500">질문</label>
                    <p className="text-sm font-semibold text-slate-300">{itemOption}</p>
                </div>
                <p className="text-sm">{qnaDate}</p>
            </div>
            <p>{comment}</p>
            <hr className="my-5"/>
        </div>
    )
}

export default QnaList