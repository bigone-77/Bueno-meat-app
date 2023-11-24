import { useState } from "react";
import UpdateField from "./UpdateField";

interface EditInputProps {
    label: string;
    inputValue?: string;
}

const EditInput = ({
    label,
    inputValue
}: EditInputProps) => {

    const [showEdit, setShowEdit] = useState(false);

    if (label === "비밀번호") {
        let password = inputValue?.split('').map((word) => word = '*').join('');
        inputValue = password;
    }
    
    return (
        <>
            <div className="flex items-center">
                <p className="w-1/4 font-semibold">{label}</p>
                {!showEdit && <>
                <p className="w-2/3 font-bold">{inputValue}</p>
                <button 
                    className={`w-1/4 ${label === "이메일" ? 'hidden' : 'block'}`}
                    onClick={() => setShowEdit(true)}
                >
                    {`${label} 변경`}
                </button>
                </>}
                {/* {showEdit && label === "비밀번호" && <EditPassword />} */}
                {showEdit && 
                    <UpdateField 
                        fieldName={label}
                        showEdit={showEdit}
                        setShowEdit={setShowEdit}
                    />
                }
            </div>
            <hr className="my-5 h-0.5"/>
        </>
    )
}

export default EditInput