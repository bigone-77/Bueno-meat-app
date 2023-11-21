import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { DevTool } from "@hookform/devtools";

import { AiOutlineGoogle } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import axios from "axios";
import requests from "../../../api/requests";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/userSlice";
import Container from "../../../components/Container";

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    const { register, control, handleSubmit, formState: { 
        errors
    }} = useForm<FieldValues>({
        defaultValues: {
            email: '',
            pw: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        // axios.post('/auth/login', data)
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
        //     navigate('/');
        //     setIsLoading(false);
        // }
        
        axios.get(`${requests.login}`, data)
            .then(response => {
                dispatch(setUser({
                    nickname: response.data[0].nickname,
                    token: response.data[0].accessToken,
                    cartCount: response.data[0].cartCount,
                    heartCount: response.data[0].heartCount
                }))
            })
            .catch(error => {
                console.log(error);
            })
        
        navigate('/');
        setIsLoading(false);
    }
    
    return (
        <Container>
            <section className="grid mt-10 overflow-y-scroll place-items-center">
                <h1 className="mb-10 text-3xl font-bold">Login</h1>
                <div className="flex flex-col gap-5 w-[350px]">
                    <div 
                        className='flex items-center justify-center gap-3 px-10 py-3 border-2 border-black rounded-md cursor-pointer hover:bg-opacity-50 bg-zinc-300'
                    >
                        <AiOutlineGoogle size={25} />
                        <p className='font-bold text-md'>
                            Continue with Google
                        </p>
                    </div>
                    <div 
                        className='flex items-center justify-center gap-3 px-10 py-3 border-2 border-black rounded-md cursor-pointer hover:bg-opacity-50 bg-zinc-300'
                    >
                        <RiKakaoTalkFill size={25} />
                        <p className='font-bold text-md'>
                            Continue with Kakao
                        </p>
                    </div>
                </div>
                <p className='my-10 font-light text-gray-400'>
                    or
                </p>
                <form className="flex flex-col justify-center gap-10 min-w-[350px]" onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        id="id"
                        label='ID'
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        message="Please enter an ID"
                        required
                    />
                    <Input 
                        id="password"
                        label='Password'
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        minLength={8}
                        type='password'
                        message="Passward must be at least 8 characters"
                        required
                    />

                    <Button label="Login" />
                </form>
                
                <span className="flex justify-between gap-5 my-10">
                    <p className="text-xl text-zinc-300">Not a member yet?</p>
                    <Link to="/auth/join"><p className="text-blue-500">Register</p></Link>
                </span>
                <DevTool control={control} />    
            </section>
        </Container>
    )
}

export default LoginPage