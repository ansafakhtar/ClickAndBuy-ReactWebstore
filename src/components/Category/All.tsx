import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, productsSelector } from "../../domain/products/productSlice";
import { ProductState } from "../../domain/products/types";
import { AppDispatch } from "../../store/store";
import Footer from "../Footer/Footer";

function CategoriesItem(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const allProductsData: ProductState = useSelector(productsSelector);
  const { products, loading } = allProductsData;

  return loading === "loaded" ? (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            {products.map((item) => (
              <div key={item.id} className="product normal">
                <Link
                  onClick={() => window.top?.scrollTo(0, 0)}
                  to={`/categories/product/${item.id}`}
                >
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
  ) : loading === "not loaded" ? (
    <h1>Not Loaded....</h1>
  ) : (
    <h1>Loading...</h1>
  );
}

export default CategoriesItem;
