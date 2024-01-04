import AdminQnaList from "../../../components/utils/AdminQnaList";

const QnaData = [
    {
        "qnaId": 12,
        "title": "질문 있습니다!",
        "comment": "어르신들 드실 갈비탕 준비하려는데 탕으로도 괜찮을까요",
        "qnaDate": "2023-12-28",
        "qnaStatus": "WAITING"
    },
    {
        "qnaId": 3,
        "title": "니똥꼬파란색",
        "comment": "뻐큐를 드셔주세연 ㅎㅎ",
        "qnaDate": "2023-12-30",
        "qnaStatus": "WAITING"
    }
]

const AdminQnaPage = () => {
    return (
        <div className="px-10 my-10">
            <div className="flex items-center">
                <p className="text-5xl font-bold text-start">문의내역 확인</p>
            </div>
            <hr className="h-1 my-5 bg-black" />
            
            <div className="p-2 border">
                {QnaData.length > 0 ? 
                    <>
                        {QnaData.map((data) => (
                            <AdminQnaList 
                                key={data.qnaId}
                                id={data.qnaId}
                                qnaStatus={data.qnaStatus}
                                title={data.title}
                                comment={data.comment}
                                qnaDate={data.qnaDate}
                            />
                        ))}
                    </>
                    :
                    <div>
                        <p className="text-lg text-center text-gray-400 mt-28">최근 문의내역이 없습니다.</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default AdminQnaPage