import { useEffect, useState } from "react";
import Slider from "../components/Slider/Slider";
import { useParams } from "react-router-dom";
import { addProductToCart } from "../domain/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import "../components/ProductPage.css";
import { CartItem } from "../domain/cart/types";
import { AppDispatch } from "../store/store";
import {
  getProductById,
  singleProductSelector,
} from "../domain/products/productSlice";
import { SingleProductState } from "../domain/products/types";

const ProductPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const productData: SingleProductState = useSelector(singleProductSelector);
  const { product, loading } = productData;

  useEffect(() => {
    dispatch(getProductById(id!));

    return () => {
        // Component unmounting logic
        setImage('');
        // console.log(image)
      };
  }, [id]);

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(product?.image);
//   console.log(image)
  const productWithQuantity: CartItem = { ...product!, quantity: quantity };

  const changeImage = (e: any) => {
    setImage(e.target.src);
  };

  const increase = () => {
    if (productWithQuantity.quantity >= 1) {
      setQuantity(productWithQuantity.quantity + 1);
    }
  };

  const decrease = () => {
    if (productWithQuantity.quantity > 1) {
      setQuantity(productWithQuantity.quantity - 1);
    }
  };

  const calcPrice = (quantity: number) => {
    return quantity * product!.price;
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  const handleAddToCart = () => {
    // console.log(product);
    dispatch(addProductToCart(productWithQuantity));
    showNotify();
  };
  return loading === "loaded" ? (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div>

      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{product?.name}</h3>
            <div className="product-left" style={{}}>
              <div className="big-img">
                <img src={`${!image ? product?.image : image}`} alt="product image"/>
              </div>
              <div className="small-imgs">
                <img
                  onMouseOver={changeImage}
                  src={product?.image}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={product?.otherImages[0]}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={product?.otherImages[1]}
                  alt="product"
                />
              </div>
            </div>
            <div className="product-right">
              <p className="product-spec">{product?.description}</p>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{productWithQuantity.quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <p className="product-price">
                  {calcPrice(productWithQuantity.quantity)}.00$
                </p>
              </div>
              <div className="atc-buy">
                <button onClick={handleAddToCart} className="atc-btn">
                  add to cart
                </button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>

          <div className="specifications">
            <div className="spec">
              <p className="spec-title">Material:</p>
              <p className="title-desc">{product?.material}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Weight:</p>
              <p className="title-desc">{product?.weight}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Size:</p>
              <p className="title-desc">{product?.size}</p>
            </div>
          </div>
        </div>
        <Slider />
      </div>
    </>
  ) : loading === "not loaded" ? (
    <h1>Not Loaded....</h1>
  ) : (
    <h1>Loading...</h1>
  );
};

export default ProductPage;
