import axios from "axios";
import { useDispatch } from "react-redux"
import requests from "../../api/requests";

import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../redux/slices/currentUserSlice";

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (email: string, pw: string) => {
        axios.get(requests.login)
            .then(response => {
                console.log(response);
                
                dispatch(setCurrentUser({
                    id: response.data[0].id,
                    nickname: response.data[0].nickname,
                    token: response.data[0].accessToken,
                    cartCount: response.data[0].cartCount,
                    heartCount: response.data[0].heartCount,
                }));
                navigate('/');

            })
            .catch(error => {
                console.log(error);
            });
            
            
    };
    return { login };
    // const login = async (email: string, pw: string) => {
    //     axios.post(requests.login, { email, pw })
    //         .then(response => {

    //         })
    // }
}


