import { BsFillChatLeftTextFill } from "react-icons/bs";

interface QuestionListProps {
    id: number;
    img: string;
    itemName: string;
    date: string;
    answer: string;
    isClicked: boolean;
    setIsClicked:  React.Dispatch<React.SetStateAction<boolean>>;
}

const QuestionList = ({
    id,
    img,
    itemName,
    date,
    answer,
    isClicked,
    setIsClicked,
}: QuestionListProps) => {
    return (
        <div>
            <div className="flex items-center justify-between p-2">
                <label className="flex items-center gap-1 px-2 py-1 text-lg font-bold text-white bg-blue-300 rounded-md">
                    <BsFillChatLeftTextFill size={32} />
                    문의 목록
                </label>
                <p>편집</p>
            </div>
            <hr className="mt-5"/>
            <div 
                className={`${isClicked ? 'bg-purple-100' : 'bg-transparent'} flex items-center gap-3 px-2 cursor-pointer py-3`}
                onClick={() => setIsClicked(true)}
            >
                <img src={img} alt={img} className="object-cover w-16 h-16 rounded-full"/>
                <span>
                    <p className="font-bold">상품 문의</p>
                    <p>{itemName}</p>
                    <p className="text-sm font-semibold text-slate-300">{date}</p>
                </span>
                <span className={`px-2 py-1 ${answer === "" ? 'bg-gray-200' : 'bg-blue-200'} rounded-md`}>
                    {answer === "" ? 
                        <p className="text-sm font-bold">답변준비중</p>
                        :
                        <p className="text-sm font-bold">답변완료</p>
                    }
                </span>
            </div>
        </div>
    )
}

export default QuestionList