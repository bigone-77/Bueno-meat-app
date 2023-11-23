import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { UserProps } from "../../types/UserProps";
import { useEffect, useState } from "react";
import useGetFetchedData from "../../hooks/useGetFetchedData";
import EditInput from "./EditInput";

const Edit = () => {
    const nickname = useSelector((state: RootState) => state.user.nickname);
    const [userData, setUserData] = useState<UserProps| null>(null);
    

    const { response } = useGetFetchedData({
        method: "get",
        url: `http://localhost:8080/mypage/${nickname}`
    });
    
    useEffect(() => {
        setUserData(response?.data[0]);
    },[])
    
    console.log(userData);
    

    return (
        <div className='mt-10 ml-52'>
            <h1 className="text-3xl font-bold">기본 회원정보 필수</h1>
            <hr className="h-1 my-5 bg-black" />
            
            <EditInput 
                label="이메일"
                inputValue={userData?.email}
            />
            <EditInput 
                label="비밀번호"
                inputValue={userData?.pw}
            />
            <EditInput 
                label="이름(실명)"
                inputValue={userData?.username}
            />
            <EditInput 
                label="닉네임"
                inputValue={userData?.nickname}
            />
            <EditInput 
                label="휴대전화"
                inputValue={userData?.phone}
            />
            <EditInput 
                label="주소지"
                inputValue={`${userData?.address} ${userData?.detailAddress}`}
            />

            
            
        </div>
    )
}

export default Edit