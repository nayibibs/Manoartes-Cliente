import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import AddArtesania from "./pages/AddArtesania";
import ProductList from "./pages/ProductList";
import DetallesDePedidos from "./pages/Details"
import AddProductos from "./pages/AddProducts";
import ProductsDetails from "./pages/ProductsDetails";
import EditProducts from "./pages/EditProducts";


export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
      
      
      <Routes>
        {/*routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))*/}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth/login" element={<LogIn/>}/>
        <Route path="/auth/signup" element={<Signup authenticate={authenticate}/>}/>
        <Route path="/productosbase" element={<ProductList/>}/>
        <Route path="/productosbase" element={<AddProductos/>}/>
        <Route path="/productosbase/:productoId" element={<ProductsDetails/>}/>
        <Route path="/productosbase/edit/:productoId" element={<EditProducts/>}/>
        <Route path="/artesania" element={<AddArtesania/>}/>
        <Route path="/details" element={<DetallesDePedidos/>}/>        
      </Routes>
    </div>
  );
}
