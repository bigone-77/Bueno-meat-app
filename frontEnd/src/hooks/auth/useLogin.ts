import axios from "axios";
import { useDispatch } from "react-redux"
import requests from "../../api/requests";

import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../redux/slices/currentUserSlice";
import { FieldValues } from "react-hook-form";

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (data: FieldValues) => {
        axios.post(requests.login, data)
            .then(response => {
                console.log(response);
                
                dispatch(setCurrentUser({
                    id: response.data.id,
                    nickname: response.data.nickname,
                    favorites: response.data.favorites,
                    // cartList: response.data.cartList,
                }));
                console.log(response);
                
                navigate('/');

            })
            .catch(error => {
                console.log(error);
            });
        // axios.get(requests.login)
        //     .then(response => {
                
        //         dispatch(setCurrentUser({
        //             id: response.data[0].id,
        //             nickname: response.data[0].nickname,
        //             favorites: response.data[0].favorites,
        //             cartList: response.data[0].cartList,
        //         }));
        //         console.log(response.data);
                
        //         navigate('/');

        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
            
    };
    return { login };
}


