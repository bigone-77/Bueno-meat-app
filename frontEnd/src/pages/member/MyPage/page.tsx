import Container from '../../../components/utils/Container'
import { useParams } from 'react-router-dom'
import Header from '../../../components/utils/Header'
import Edit from '../../../components/Member/Edit/Edit'


const MyPage = () => {
    const params = useParams();
    const path = params.path;
    
    
    return (
        <Container>
            <Header 
                pageType="mypage"
                pageName={path} 
            />
            {path === "cart" && <div>카트페이지입니다!</div>}
            {path === "wishlist" && <div>관심목록페이지입니다!</div>}
            {path === "edit" && <Edit />}
        </Container>
    )
}

export default MyPage