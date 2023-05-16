import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { ProductList } from "./pages/ProductList/ProductList";
import { Product } from "./pages/Product/Product";
import { Favourite } from "./pages/Favourite/Favourite";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/product/1" element={<Product />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
