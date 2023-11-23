import { useParams } from 'react-router-dom'
import Container from '../../components/utils/Container';
import Header from '../../components/utils/Header';

const CategoryPage = () => {
    const params = useParams();
    
    const pageName = params.path;
    
    return (
        <Container>
            <Header 
                pageType="category"
                pageName={pageName} 
            />
        </Container>
    )
}

export default CategoryPage