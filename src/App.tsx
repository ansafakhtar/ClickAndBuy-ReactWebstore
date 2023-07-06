import { Routes, Route } from "react-router-dom";
import { CartPage } from "./pages/CartPage";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import All from "./components/Category/All";
import CategoryProducts from "./components/Category/CategoryProducts";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="categories" element={<CategoryPage />}>
          <Route path="all" element={<All />} />
          <Route path="furniture" element={<CategoryProducts category= "furniture" />} />
          <Route path="electronics" element={<CategoryProducts category= "electronics" />} />
          <Route path="lamps" element={<CategoryProducts category= "lamp" />} />
          <Route path="kitchen" element={<CategoryProducts category= "kitchen" />} />
          <Route path="chairs" element={<CategoryProducts category= "chair"/>} />
        </Route>     
        <Route path="/aboutus" element={<AboutUs />} />   
        <Route path="/cart" element={<CartPage />} />
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
