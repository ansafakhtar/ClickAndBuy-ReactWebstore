// import EmptyCartImg from "../img/cart/empty-cart.png";
import { FC, MouseEventHandler } from "react";

interface EmptyCartProps {
    openCart: MouseEventHandler;
}

const EmptyCart: FC<EmptyCartProps> = ({ openCart }): JSX.Element => {
  return (
    <div className="empty-cart">
      {/* <img src={EmptyCartImg} alt="empty-cart" /> */}
      <p>Your cart is empty</p>
      <button onClick={openCart}>Keep Browsing</button>
\    </div>
  );
}

export default EmptyCart;
