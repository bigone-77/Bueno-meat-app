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
                // dispatch(setCurrentUser({
                //     nickname: response.data.nickname,
                // }));
                navigate('/');

            })
            .catch(error => {
                console.log(error);
            });
        // axios.get(requests.login)
        //     .then(response => {
        //         console.log(response);
                
        //         dispatch(setCurrentUser({
        //             id: response.data[0].id,
        //             nickname: response.data[0].nickname,
        //             cartCount: response.data[0].cartCount,
        //             heartCount: response.data[0].heartCount,
        //         }));
        //         navigate('/');
        //     })
            
    };
    return { login };
}


