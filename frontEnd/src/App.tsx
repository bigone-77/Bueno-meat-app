import { Outlet, Route, Routes } from "react-router-dom";
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
    return (
      <div>
        <MemberNav />
        <Outlet />
      </div>
    )
  }

  const currentUser = useSelector((state: RootState) => state.currentUser.nickname);
  
  return (
    <div>
      <Routes>
        {/* <Route path='/auth/join' element={<JoinPage />} />
        <Route path='/auth/login' element={<LoginPage />} /> */}
        <Route path='/auth'>
          <Route path='join' element={<JoinPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>

        <Route path='/' element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path='/products/:productId' element={<ProductDetailPage />} />
          <Route path='/category/:path' element={<CategoryPage />} />

          {currentUser && 
          <Route path='/member/mypage/:path' element={<MemberLayout />}>
            <Route index element={<MyPage />} />
          </Route>
          }

        </Route>
        <Route path=":bulabula" element={<ErrorPage />} />
      </Routes>
    </div>
    );
}

export default App;
