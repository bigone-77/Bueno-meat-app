import { Navigate, Outlet, Route, Routes, useParams } from "react-router-dom";
import MainNavbar from "./components/MainNav";
import JoinPage from "./pages/Auth/JoinPage/page";
import LoginPage from "./pages/Auth/LoginPage/page";
import MainPage from "./pages/MainPage/page";
import ProductDetailPage from "./pages/DetailProduct/page";
import ErrorPage from "./pages/ErrorPage/page";
import CategoryPage from "./pages/CategoryPage/page";
import { useSelector } from "react-redux";
import { RootState } from "./redux";
import MyPage from "./pages/member/MyPage/page";
import MemberNav from "./components/MemberNav";
import SearchPage from "./pages/SearchPage/page";
import ToastProvider from "./components/utils/ToastProvider";


function App() {
  const MainLayout = () => {
    return (
      <div>
        <MainNavbar />
        <Outlet />
      </div>
    );
  }

  const MemberLayout = () => {
    const params = useParams();
    return (
      <div>
        <MemberNav params={params}/>
        <Outlet />
      </div>
    )
  }

  const currentUser = useSelector((state: RootState) => state.currentUser.id);
  
  return (
    <div>
      <ToastProvider />
      <Routes>
        
        <Route path='/auth'>
          <Route path='join' element={<JoinPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>

        <Route path='/' element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path='/products/:productId' element={<ProductDetailPage />} />
          <Route path='/category/:path' element={<CategoryPage />} />
          <Route path='search' element={<SearchPage />}/>

          {currentUser ?
          <Route path='/member/mypage/:path' element={<MemberLayout />}>
            <Route index element={<MyPage />} />
          </Route>  :  <Route path='/member/mypage/:path' element={<Navigate to="/auth/login" />} />
          }

        </Route>
        <Route path=":bulabula" element={<ErrorPage />} />
      </Routes>
    </div>
    );
}

export default App;
