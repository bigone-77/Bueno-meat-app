import { Outlet, Route, Routes } from "react-router-dom";
import MainNavbar from "./components/MainNav";
import JoinPage from "./pages/Auth/JoinPage/page";
import LoginPage from "./pages/Auth/LoginPage/page";
import MainPage from "./pages/MainPage/page";


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
          <Route path='/auth/join' element={<JoinPage />} />
          <Route path='/auth/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
    );
}

export default App;
