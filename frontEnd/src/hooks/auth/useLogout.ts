import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { removeCurrentUser } from "../../redux/slices/currentUserSlice";
import { getCookie, removeCookie } from '../useCookies';
import axios from '../../api/axios';
import { RootState } from '../../redux';

export const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const memberId = useSelector((state: RootState) => state.currentUser.id);
    const refreshToken = getCookie("refreshToken");

    const logout = async () => {
        if (refreshToken) {
            await axios.post(`/auth/logout/${memberId}`, {}, {
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },
            })
        };
        dispatch(removeCurrentUser());
        localStorage.removeItem("accessToken");
        removeCookie('refreshToken');
        navigate('/');
    };

    return { logout };
}