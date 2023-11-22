import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { DevTool } from "@hookform/devtools";

import { AiOutlineGoogle } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import Container from "../../../components/Container";
import { useLogin } from "../../../hooks/auth/useLogin";



const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useLogin();
    
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
        const { email, pw } = data;
        login(email, pw);
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