import { IconType } from 'react-icons';

interface IconCardProps {
    label: string;
    icon: IconType;
    selected?: boolean;
}

const IconCard = ({
    label,
    icon: Icon,
}: IconCardProps) => {
    return (
        <div className='flex flex-col items-center justify-center px-2 py-1 transition-all border-2 rounded-lg text-center cursor-pointer border-zinc-800 hover:bg-zinc-300 w-[100px] h-[100px]'>
            <span>
                <Icon size={30} />
            </span>
            <label>{label}</label>
        </div>
    )
}

export default IconCard
