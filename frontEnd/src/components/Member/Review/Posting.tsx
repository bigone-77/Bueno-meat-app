import { FaStar } from "react-icons/fa6";

import SelectedStars from "../../utils/SelectedStars"
import { useState } from "react";
import UploadInput from "../../utils/Upload/UploadInput";
import PreviewUpload from "../../utils/Upload/PreviewUpload";

const Posting = () => {
    const [enteredText, setEnteredText] = useState('');
    const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);

    const handleFileUrlChange = (url: string) => {
        setUploadedFileUrl(url);
    }

    return (
        <div>
            <span className="flex items-center">
                <p className="w-1/6 text-lg font-bold">별점</p>
                <SelectedStars
                    fillStar={FaStar}
                />
            </span>

            <hr className="my-10"/>

            <span className="relative flex items-start">
                <p className="w-1/6 text-lg font-bold">구매후기</p>
                <textarea 
                    style={{ resize: "none" }}
                    className="w-full h-40 p-2 border-2" 
                    placeholder="다른 고객님에게 도움이 될 수 있도록 상품에 대한 평가를 솔직하게 남겨주세요"
                    value={enteredText}
                    onChange={(e) => setEnteredText(e.target.value)}
                />
                <p className="absolute bottom-2 right-2">{enteredText.length}</p>
            </span>

            <hr className="my-10"/>
            
            <span className="flex items-center">
                <p className="w-1/6 text-lg font-bold">사진첨부</p>
                <UploadInput onFileUrlChange={handleFileUrlChange} />
                <PreviewUpload fileUrl={uploadedFileUrl} />
            </span>
        </div>
    )
}

export default Posting