import { useState } from 'react'
import AddressInput from '../../utils/AddressInput'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../utils/Button';
import { UpdateFieldProps } from './UpdateField';
import Input from '../../utils/Input';

const UpdateZipcode = ({
    prevValue,
    fieldName,
    setShowEdit,
}: UpdateFieldProps) => {

    const [isLoading, setIsLoading] = useState(false);
    
    const { register, handleSubmit, setValue, formState: {
        errors
    } } = useForm<FieldValues>({
        defaultValues: {

        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log(data);
        setIsLoading(false);
        setShowEdit(false);
    }

    return (
        <div className='w-[360px]'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AddressInput 
                    label="신규 주소지"
                    register={register}
                    setValue={setValue}
                    required
                />
                <div className='flex items-center gap-5 mt-10'>
                    <label className='w-[200px]'>{`신규 상세${fieldName}`}</label>
                    <Input 
                        id={`신규 상세${fieldName}`}
                        type="text"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                </div>
                <p className="mt-5 font-light text-gray-400 ">{`기존 ${fieldName}: ${prevValue}`}</p>
                <div className='flex items-center w-1/2 gap-2 mt-10'>
                    <button onClick={() => setShowEdit(false)}>취소</button>
                    <Button label="완료"/>
                </div>
            </form>
        </div>
    )
}

export default UpdateZipcode