interface SelectedBoxProps {
    price: number;
    selectedOption: string;
    handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectedBox = ({
    price,
    selectedOption,
    handleSelect
}: SelectedBoxProps) => {

    const selectedOptions = [`250g`, `500g(+${price*1.2}원)`, `700g(+${price*1.5}원)`, `900g(+${price*1.8}원)`];
    // const selectedOptions = [
    //     {
    //         id: 1,
    //         content: "graph"
    //     }
    // ] 

    return (
        <select 
            className='px-4 py-2 ml-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
            value={selectedOption} 
            onChange={handleSelect}
        >
            <option value="-1">-[필수] 옵션을 선택해주세요</option>
            <option disabled>-----------------------</option>
            {selectedOptions.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
                                
    )
}

export default SelectedBox