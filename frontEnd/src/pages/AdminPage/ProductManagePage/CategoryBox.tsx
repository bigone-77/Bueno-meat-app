import { IconType } from "react-icons";

interface CategoryBoxProps {
    id: number;
    label: string;
    icon: IconType;
    onClick:  (category: number) => void;
    selected: boolean;
}

const CategoryBox = ({
    id,
    label,
    icon: Icon,
    onClick,
    selected
}: CategoryBoxProps) => {
    return (
        <div 
            className={`flex flex-col items-center justify-center px-2 py-1 transition-all border-2 rounded-lg text-center cursor-pointer border-zinc-800 hover:bg-zinc-300 w-full h-[100px] ${selected? 'bg-zinc-300' : 'bg-transparent' }`}
            onClick={() => onClick(id)}
        >
            <span className='flex gap-2'>
                <Icon size={30} />
            </span>
            <label>{label}</label>
        </div>
    )
}

export default CategoryBox