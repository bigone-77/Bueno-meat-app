import { useParams } from 'react-router-dom'
import Container from '../../components/utils/Container'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import EmptyState from '../../components/utils/EmptyState';
import SubDiv from '../../components/utils/SubDiv';
import ProductWeightOption from '../../components/ProductWeightOption';

const ProductDetailPage = () => {

    const params = useParams();
    const productData = useSelector((state: RootState) => state.product);

    const detailProductData = productData.find((product) => product.id === parseInt(params.productId!)); 

    if (detailProductData) {
        let { name, info, price, weight, weightUnit, image } = detailProductData;
        
        return (
            <Container>
                <div className='grid grid-cols-1 gap-5 mt-56 sm:grid-cols-2'>

                    <img src={image} alt='product-img' className='w-[480px] h-[580px]' />

                    
                    <div>
                        <hr className='w-full h-1 mb-10 bg-black' />
                        <section className='flex flex-col items-start justify-center gap-5'>
                            <p className='text-3xl font-Cafe24Shiningstar'>{name}</p>
                            <hr/>
                            <p className='font-semibold text-gray-500'>{info}</p>
                            <hr />
                            <SubDiv 
                                firstTitle="PRICE"
                                subTitle={price}
                            />
                            <SubDiv 
                                firstTitle='Point'
                                subTitle='1%'
                            />
                            <hr />
                            
                            <ProductWeightOption 
                                price={price}
                                weight={weight}
                                weightUnit={weightUnit}
                            />
                            
                            <span className='grid w-full grid-cols-3 gap-3'>
                                <button className='bg-blue-500'>바로구매</button>
                                <button>장바구니</button>
                                <button>관심상품</button>
                            </span>
                        </section>
                    </div>
                </div>
        </Container>
        )
    } else {
        return (
            <EmptyState 
                title="MEAT NOT FOUND"
                subTitle="해당 관련된 상품이 없습니다."
            />
        )
    }

    
    
}

export default ProductDetailPage