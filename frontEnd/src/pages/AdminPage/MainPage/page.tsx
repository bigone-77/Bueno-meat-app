import { useNavigate } from "react-router-dom"
import Container from "../../../components/utils/Container"

const AdminMainPage = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="grid grid-cols-2 mt-[25%] gap-10">
                <div 
                    className="flex items-center justify-center py-10 border rounded-md cursor-pointer hover:bg-black hover:text-white"
                    onClick={() => navigate('product')}
                >
                    <p className="text-4xl font-bold">상품관리</p>
                </div>

                <div 
                    className="flex items-center justify-center py-10 border rounded-md cursor-pointer hover:bg-black hover:text-white"
                    onClick={() => navigate('qna')}
                >
                    <p className="text-4xl font-bold">고객문의관리</p>
                </div>
            </div>
        </Container>
    )
}

export default AdminMainPage