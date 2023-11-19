import { useParams } from 'react-router-dom'
import Container from '../../components/Container'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { ProductProps } from '../../types/ProductProps';

const ProductDetailPage = () => {

    const params = useParams();
    const productData = useSelector((state: RootState) => state.product);

    const detailProductData = productData.find((product) => product.id === parseInt(params.productId!)); 
    
    if (detailProductData) {
        let { title, description, price, imageURL } = detailProductData;
        return (
            <Container>
                <div className='grid grid-cols-1 gap-5 mt-56 sm:grid-cols-2'>
                    <img src={detailProductData?.imageURL} alt='product-img' />
                    <section className='flex flex-col items-center justify-center gap-10'>
                        <p>{title}</p>
                    </section>
                </div>
        </Container>
        )
    } else {
        return (
            <div className="grid mt-56 overflow-y-scroll place-items-center">
                
            </div>
        )
    }

    
    
}

export default ProductDetailPage