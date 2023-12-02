import Container from '../../../components/utils/Container'
import { useParams } from 'react-router-dom'
import Header from '../../../components/utils/Header'
import Edit from '../../../components/Member/Edit/Edit'
import WishList from '../../../components/Member/WishList'


const MyPage = () => {
    const params = useParams();
    const path = params.path;
    
    
    return (
        <Container>
            <Header 
                pageType="mypage"
                pageName={path} 
            />
            {path === 'orderlist' && <div>주문내역페이지입니다!</div>}
            {path === "review" && <div>리뷰페이지입니다!</div>}
            {path === "counsel" && <div>문의페이지입니다!</div>}
            {path === "wishlist" && <WishList />}
            {path === "cart" && <div>카트페이지입니다!</div>}
            {path === "edit" && <Edit />}
        </Container>
    )
}

export default MyPage