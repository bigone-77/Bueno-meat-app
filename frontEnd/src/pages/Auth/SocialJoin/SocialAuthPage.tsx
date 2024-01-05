import { useEffect } from 'react'
import Container from '../../../components/utils/Container'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SocialAuthPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');

  const postHandler = async () => {
    axios.post("/auth/socialLogin/token", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then ((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
      
    })
  }

  useEffect(() => {
    if (accessToken && refreshToken){
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      postHandler();
    }
  }, []); 

  return (
    <Container>
      <section className="grid mt-40 overflow-y-scroll place-items-center">
        <h1 className="mb-4 text-3xl font-bold">로그인처리중입니다. 잠시만 기다려주세요.</h1>
      </section>
    </Container>
  )
}

export default SocialAuthPage