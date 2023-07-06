import "./BestSellers.css";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { getProducts, productsSelector } from "../../domain/products/productSlice";
import { ProductState } from "../../domain/products/types";

const BestSellers: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productsData: ProductState = useSelector(productsSelector);
  const { products, loading } = productsData;

  return loading === "loaded" ? (
    <section>
      <div className="proud-container">
        <h2 className="container proud-h2">Our Best Selling Products</h2>
        <div className="container">
          <div className="products-grid">
            {products.map((book) => (
              book.id < 10 && <ProductCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : loading === "not loaded" ? (
    <h1>Not Loaded....</h1>
  ) : (
    <h1>Loading...</h1>
  );
};

export default BestSellers;
