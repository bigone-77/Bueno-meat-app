import { IconType } from 'react-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { useNavigate } from 'react-router-dom';

interface IconCardProps {
    label: string;
    path?: string;
    icon: IconType;
    type?: string; 
}

const IconCard = ({
    label,
    path,
    icon: Icon,
    type,
}: IconCardProps) => {
    
    const cartCount = useSelector((state: RootState) => state.currentUser.cartCount);
    const heartCount = useSelector((state: RootState) => state.currentUser.heartCount);
    const navigate = useNavigate();

    let typeCount: number | undefined;
    if (type?.includes('shopping')) {
        typeCount = cartCount;
    }

    if (type?.includes('heart')) {
        typeCount = heartCount;
    }
    
    
    return (
        <div 
            className='flex flex-col relative items-center justify-center px-2 py-1 transition-all border-2 rounded-lg text-center cursor-pointer border-zinc-800 hover:bg-zinc-300 w-[100px] h-[100px]'
            onClick={() => {
                navigate(`/member/mypage/${path}`)
            }}
        >
            <span className='flex gap-2'>
                <Icon size={30} />
                {type && typeCount !== 0 && 
                    <p className='absolute w-8 h-8 bg-blue-300 border rounded-full -top-2 right-2'>{typeCount}</p>}
            </span>
            <label>{label}</label>
        </div>
    )
}

export default IconCard
