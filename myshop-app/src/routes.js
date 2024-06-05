import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default AppRouter;
