import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { Header } from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { ProductList } from "./pages/ProductList/ProductList";
import { Product } from "./pages/Product/Product";
import { Favourite } from "./pages/Favourite/Favourite";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { Protection } from "./component/Protection/Protection";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer
        position="top-right"
        autoClose="500"
        limit="1"
        style={{ top: "4.5em", right: "0em" }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route
          path="/favourite"
          element={
            <Protection>
              <Favourite />
            </Protection>
          }
        />
        <Route
          path="/cart"
          element={
            <Protection>
              <Cart />
            </Protection>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
