import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'
import Container from '../Container';
import { Link } from 'react-router-dom';
import { ShowNavItems } from './NavItems';
import CategoryModal from './CategoryModal';
import { useState } from 'react';
import useScroll from '../../hooks/useScroll';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { removeUser } from '../../redux/slices/userSlice';



const MainNavbar = () => {
    const [showModal, setShowModal] = useState(false);
    const show = useScroll();

    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.user.nickname);
    
    
    return (
        <Container>
            <div className={`fixed top-0 left-0 right-0 z-20 ${show ? 'bg-zinc-50' : 'bg-transparent'} px-10`}>
                <div className={`flex ${currentUser ? 'justify-between' : 'justify-end'} w-full px-10 py-5`}>
                    {currentUser && <ul className='flex gap-3 text-gray-300 text-light'>
                        <p className='ml-2 text-2xl text-black font-Cafe24Shiningstar'>Hello {currentUser}</p>
                        <li>Point</li>
                        <li>Coupon</li>
                        <li>Heart</li>
                        <li>Cart</li>
                    </ul>}
                    <ul className='flex items-center gap-4 text-sm font-light'>
                        {currentUser ? <Link to="/"><li>내정보수정</li></Link> : <Link to="/auth/join"><li>회원가입</li></Link>}
                        {currentUser ? <li onClick={() => dispatch(removeUser())}>로그아웃</li> : <Link to="/auth/login"><li>로그인</li></Link>}
                        <li>고객센터</li>
                    </ul>
                </div>
            <div className='flex items-center justify-between h-8 mt-10'>
                <GiHamburgerMenu
                    className='cursor-pointer'
                    size={25} 
                    onClick={() => setShowModal(true)}
                />
                <Link to="/"><p className='text-6xl font-Cafe24Shiningstar'>Bueno Meat</p></Link>
                <div className='flex items-center border-4 border-zinc-800'>
                    <input 
                        type='text'
                        className='w-auto px-2 py-1 outline-none'
                    />
                    <span className='flex items-center justify-center h-[32px] w-[32px] bg-zinc-800'>
                        <AiOutlineSearch size={25} className='text-white' />
                    </span>
                </div>
                <ShowNavItems />
            </div>
            <hr className="h-1 my-12 bg-gray-200" />
            {showModal && 
                <CategoryModal 
                    setShowModal={setShowModal}
                />
            }
            </div>
        </Container>
    )
}

export default MainNavbar