import "./Slider.css";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productsSelector,
} from "../../domain/products/productSlice";
import { useEffect } from "react";
import { ProductState } from "../../domain/products/types";

function SliderItem() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productsData: ProductState = useSelector(productsSelector);
  const { products, loading } = productsData;
  const filteredItems = products.filter((item) => item.id >= 7);

  return loading === "loaded" ? (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="row-item">
          <Link
            onClick={() => window.top?.scrollTo(0, 0)}
            to={`/categories/product/${item.id}`}
          >
            <div className="item-header">
              <img src={item.image} alt="product" />
            </div>
            <div className="item-description">
              <p>{item.name}</p>
              <p className="item-price">{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  ) : loading === "not loaded" ? (
    <h1>Not Loaded....</h1>
  ) : (
    <h1>Loading...</h1>
  );
}

export default SliderItem;
