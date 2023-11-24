import { Dispatch, SetStateAction } from "react";
import Input from "../../utils/Input";
import { FieldValues, useForm } from "react-hook-form";
import Button from "../../utils/Button";

interface UpdateFieldProps {
    fieldName: string;
    showEdit: boolean;
    setShowEdit: Dispatch<SetStateAction<boolean>>
}

const UpdateField = ({
    fieldName,
    showEdit,
    setShowEdit
}: UpdateFieldProps) => {
    


    const { register, control, handleSubmit, setValue, formState: {
        errors
    }} = useForm<FieldValues>({
        defaultValues: {
            fieldName: fieldName,
        }
    })


    return (
        <div>
            <Input 
                id={fieldName}
                label={fieldName.toUpperCase()}
                type={fieldName === "pw" ? 'password' : 'text'}
                register={register}
                errors={errors}
                required
            />
            <button onClick={() => setShowEdit(false)}>취소</button>
            <Button label="완료" />
        </div>
    )
}

export default UpdateField