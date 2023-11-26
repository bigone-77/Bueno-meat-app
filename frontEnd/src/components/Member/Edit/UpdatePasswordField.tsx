import { useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../utils/Input";
import Button from "../../utils/Button";
import { UpdateFieldProps } from "./UpdateField";

const UpdatePasswordField = ({
    fieldName,
    setShowEdit
}: UpdateFieldProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [checkedPw, setCheckedPw] = useState('');

    const { register, handleSubmit, getValues, setValue, formState: {
        errors
    }} = useForm<FieldValues>({
        defaultValues: {
            
        }
    })

    // console.log(fieldName); // fieldName은 비밀번호

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (checkedPw !== getValues(`신규 ${fieldName}`)) {
            alert("신규 비밀번호와 재입력 비밀번호가 같지 않습니다");
            setCheckedPw('');
            setValue(`신규 ${fieldName}`, '');
            // post axios 코드
        }
        // console.log(getValues(`신규 ${fieldName}`)); 신규 비밀번호 값을 뱉음
        setIsLoading(false);
        setShowEdit(false)
    }


    return (
        <div className="w-[360px]">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row items-center gap-5">
                    <label className="w-2/5">
                        현재 비밀번호
                    </label>
                    <Input
                        id={`현재 ${fieldName}`}
                        type="password"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                </div>
                <div className="flex flex-row items-center gap-5">
                    <label className="w-2/5">
                        신규 비밀번호
                    </label>
                    <Input 
                        id={`신규 ${fieldName}`}
                        type='password'
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                </div>
                <div className="flex flex-row items-center gap-5">
                    <label className="w-2/5">
                        신규 비밀번호 재입력
                    </label>
                    <input 
                        className="w-full p-4 pt-6 font-light transition bg-white border-2 border-black rounded-md outline-none focus:border-black"
                        value={checkedPw}
                        onChange={(e) => setCheckedPw(e.target.value)}
                        id={fieldName}
                        type='password'
                        disabled={isLoading}
                        required
                    />
                </div>
                <div className="flex w-1/2 gap-2">
                    <button onClick={() => setShowEdit(false)}>취소</button>
                    <Button label="완료" />
                </div>
            </form>
        </div>
    )
}

export default UpdatePasswordField