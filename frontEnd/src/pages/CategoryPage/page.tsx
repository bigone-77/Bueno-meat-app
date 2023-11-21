import { useParams } from 'react-router-dom'
import Container from '../../components/Container';
import Header from '../../components/Header';

const CategoryPage = () => {
    const params = useParams();
    
    const pageName = params.path;
    
    return (
        <Container>
            <Header pageName={pageName} />
        </Container>
    )
}

export default CategoryPage