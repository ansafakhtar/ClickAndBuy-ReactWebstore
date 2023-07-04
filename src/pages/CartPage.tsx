import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CartItem } from "../domain/cart/types";
import { removeProductFromCart } from "../domain/cart/cartSlice";

export const CartPage = (): JSX.Element => {
  const cartData = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div>Cart Page</div>
      {cartData.length === 0 ? (
        <></>
      ) : (
        <div>
          {cartData.map((cartitem: CartItem) => {
            return (
              <>
                <div>
                  {cartitem.name}
                  <button
                    onClick={() => dispatch(removeProductFromCart(cartitem.id))}
                  >
                    Remove Book
                  </button>
                </div>
                <br></br>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};
