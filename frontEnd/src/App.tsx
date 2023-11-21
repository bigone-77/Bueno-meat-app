import { Outlet, Route, Routes } from "react-router-dom";
import MainNavbar from "./components/MainNav";
import JoinPage from "./pages/Auth/JoinPage/page";
import LoginPage from "./pages/Auth/LoginPage/page";
import MainPage from "./pages/MainPage/page";
import ProductDetailPage from "./pages/DetailProduct/page";
import ErrorPage from "./pages/ErrorPage/page";


function App() {
  const MainLayout = () => {
    return (
      <div>
        <MainNavbar />
        <Outlet />
      </div>
    );
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path='/products/:productId' element={<ProductDetailPage />} />
          <Route path='/auth/join' element={<JoinPage />} />
          <Route path='/auth/login' element={<LoginPage />} />
        </Route>
        <Route path=":bulabula" element={<ErrorPage />} />
      </Routes>
    </div>
    );
}

export default App;
