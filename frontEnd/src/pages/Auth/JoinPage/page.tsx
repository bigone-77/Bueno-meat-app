import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";
import Input from "../../../components/Input"
import { useState } from "react";
import Button from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import AddressInput from "../../../components/AddressInput";
// import axios from "axios";

const JoinPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [second, setSecond] = useState(false);
    // first는 이메일 비밀번호
    // setSecond(true)는 이름, 휴대폰 번호, 닉네임, 주소, 상세주소
    const navigate = useNavigate();
    
    const { register, control, handleSubmit, setValue, formState: { 
        errors
    }} = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
            name: '',
            phoneNum: '',
            nickName: '',
            address: '',
            detailAddress: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        // axios.post("http://localhost:8080/auth/join", data)
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(error => {
        //         console.log(error);
                
        //     })
        console.log(data);
        navigate('/auth/login');
        setIsLoading(false);
    }
    
    return (
        <section className="grid mt-56 overflow-y-scroll place-items-center">
            <h1 className="mb-4 text-3xl font-bold">Join</h1>
            <form className="flex flex-col justify-center gap-10 min-w-[350px]" onSubmit={handleSubmit(onSubmit)}>
                {!second && <>
                    <Input 
                        id="email"
                        label="Email"
                        type="email"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        pattern={/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}
                        message="Follow the email form"
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
                    <button onClick={() => setSecond(true)}>Next</button>
                </>}{second && <>
                        <Input 
                            id="name"
                            label="Name"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            message="Please enter a Name"
                            required
                        />
                        <Input 
                            id="phoneNum"
                            label="Phone Number"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            message="Please enter Phone Number"
                            required
                        />
                        <Input 
                            id="nickName"
                            label="NickName"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            message="Please enter a NickName"
                            required
                        />
                        <AddressInput
                            label="Address"
                            register={register}
                            setValue={setValue}
                            message="Please enter an address"
                            required
                        />
                        <Input 
                            id="detailAddress"
                            label="Detail Address"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            message="Please enter a detail address"
                            required
                        />
                        <button onClick={() => setSecond(false)} >Prev</button>
                        <Button label="Create Account" />
                    </>}
            </form>
            <span className="flex justify-between gap-5 my-10">
                <p className="text-xl text-zinc-300">Already have an account?</p>
                <Link to="/auth/login"><p className="text-blue-500">Log in</p></Link>
            </span>
            <DevTool control={control} />
        </section>
    )
}

export default JoinPage