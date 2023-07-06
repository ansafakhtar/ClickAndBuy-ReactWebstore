import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductByCategory, productsByCategorySelector } from "../../domain/products/productSlice";
import { ProductState } from "../../domain/products/types";
import { AppDispatch } from "../../store/store";
import Footer from "../Footer/Footer";

interface CategoryProductsProps {
  category: string;
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({
  category,
}): JSX.Element => {
  const allProductsData: ProductState = useSelector(productsByCategorySelector);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProductByCategory(category));
  }, [category]);

  const { products, loading } = allProductsData;

  return loading === "loaded" && products.length > 0 ? (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            {products.map((item) => (
              <div key={item.id} className="product normal">
                <Link to={`/categories/product/${item.id}`}>
                  <div className="product-header">
                    <img src={item.image} alt="product1" />
                  </div>
                  <div className="product-details">
                    <p>{item.name}</p>
                    <p className="item-price">{item.price}$</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : loading === "loaded" ? (
    <>
      <h1>No Product Found.</h1>
      <Footer />
    </>
  ) : loading === "not loaded" ? (
    <>
      <h1>Not Loaded!</h1>
      <Footer />
    </>
  ) : (
    <>
      <h1>Loading...</h1>
      <Footer />
    </>
  );
};

export default CategoryProducts;
