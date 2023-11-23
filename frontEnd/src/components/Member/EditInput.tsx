interface EditInputProps {
    label: string;
    inputValue?: string;
}

const EditInput = ({
    label,
    inputValue
}: EditInputProps) => {
    return (
        <>
            <div className="flex items-center">
                <p className="w-1/4 font-semibold">{label}</p>
                <p className="w-2/3 font-bold">{inputValue}</p>
            </div>
            <hr className="my-5 h-0.5"/>
        </>
    )
}

export default EditInput