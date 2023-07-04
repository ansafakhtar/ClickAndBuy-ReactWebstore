// import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import SingleCartItem from "./CartItems";

function CartWithItems() {
  const cartData = useSelector((state: RootState) => state.cart.cart);

  const total = cartData.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
  // useEffect(()=> {},[cartData]);

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartData.map((item, id) => (
            <SingleCartItem key={id} cartItem={item} />
          ))}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">{total + ".00$"}</p>
        </div>
        <div className="sub-left">{/* <Link>Go to Checkout</Link> */}</div>
      </div>
    </>
  );
}

export default CartWithItems;
