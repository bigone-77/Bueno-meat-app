import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../utils/Input";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "../../utils/Button";

export interface UpdateFieldProps {
    prevValue?: string;
    fieldName: string;
    setShowEdit: Dispatch<SetStateAction<boolean>>
}

const UpdateField = ({
    prevValue,
    fieldName,
    setShowEdit,
}: UpdateFieldProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: {
        errors
    }} = useForm<FieldValues>({
        defaultValues: {

        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        console.log(data);

        setIsLoading(false);
        setShowEdit(false)
    }

    return (
        <div className="w-[360px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center gap-5">
                    <label className="w-full">{`신규 ${fieldName}`}</label>
                    <Input 
                        id={`신규 ${fieldName}`}
                        type="text"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                </div>
                <p className="mt-5 font-light text-gray-400 ">{`기존 ${fieldName}: ${prevValue}`}</p>
                <div className="flex w-1/2 gap-2 mt-10">
                    <button onClick={() => setShowEdit(false)}>취소</button>
                    <Button label="완료" />
                </div>
            </form>
        </div>
    )
}

export default UpdateField