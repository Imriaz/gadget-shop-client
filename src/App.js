import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Product from '../src/pages/Product';
import Shop from "./pages/Shop";
import AdminProducts from "./pages/AdminProducts";
import SingleProduct from "./pages/SingleProduct";
import UpdateProduct from "./pages/UpdateProduct";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <h1>Gadget Shop</h1>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/admin" element={<AdminProducts />} />
        <Route path="/products/:proId" element={<SingleProduct />} />
        <Route path="/products/update/:proId" element={<UpdateProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
