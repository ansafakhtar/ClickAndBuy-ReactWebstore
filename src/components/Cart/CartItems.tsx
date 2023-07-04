// import { useState } from "react";
import { CartItem } from "../../domain/cart/types";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeProductFromCart } from "../../domain/cart/cartSlice";

interface CartItemProps {
  cartItem: CartItem;
}

const CartItems: React.FC<CartItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(cartItem.quantity);

  // const increase = (prevQuantity: number) => {
  //   if (prevQuantity >= 1) {
  //     setQuantity((prevQuantity += 1));
  //   }
  // };

  // const decrease = (prevQuantity: number) => {
  //   if (prevQuantity > 1) {
  //     setQuantity((prevQuantity -= 1));
  //   }
  // };

  const calcPrice = (quantity: number, itemPrice: number) => {
    return quantity * itemPrice;
  };

  return (
    <>
      <div key={cartItem.id} className="cart-item">
        <div className="cart-img">
          <img src={cartItem.image} alt="product" />
        </div>
        <div className="cart-middle">
          <p className="cart-name">{cartItem.name}</p>
          <div className="cart-btns">
            {/* <button onClick={() => decrease(quantity)}>-</button> */}
            <button onClick={() => dispatch(decrementQuantity(cartItem.id))}>-</button>
            <p className="quantity">{cartItem.quantity}</p>
            {/* <button onClick={() => increase(quantity)}>+</button> */}
            <button onClick={() => dispatch(incrementQuantity(cartItem.id))}>+</button>
          </div>
        </div>
        <div className="cart-right">
          <p className="cart-price">
            {calcPrice(cartItem.quantity, cartItem.price)}.00$
          </p>
          <i
            onClick={() => dispatch(removeProductFromCart(cartItem.id))}
            className="fa-sharp fa-solid fa-xmark"
          ></i>
        </div>
      </div>
    </>
  );
};

export default CartItems;
