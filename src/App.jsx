import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { Product } from "./pages/Product";
import { Favourite } from "./pages/Favourite";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/product/1" element={<Product />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
