import React, { useState } from "react";
import "./styles.css";
import Logo from "../../../src/assets/Click&Buy.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import EmptyCart from "../Cart/EmptyCart";
import CartWithItems from "../Cart/CartWithItems";

const NavBar: React.FC = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(false);
  // const [sticky, setSticky] = useState(false);
  // const [mobileNav, setMobileNav] = useState(false);
  // const [cart, setCart] = useState(false);

  const cartData = useSelector((state: RootState) => state.cart.cart);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
    setCart(!cart);
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <i
          onClick={() => setMobileNav(!mobileNav)}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
        <div className="mobile-links">
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/all">
            categories
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/lamps">
            lamps
          </Link>
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/categories/product/19"
          >
            product page
          </Link>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>

      {/* cart */}
      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">
            Your Shopping Cart ({cartData.length})
          </h2>
          <i onClick={openCart} className="fa-sharp fa-solid fa-xmark"></i>
        </div>

        <div className="cart-body">
          {cartData.length < 1 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartWithItems />
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            <Link to="/">
              <img
                onClick={scrollToTop}
                src={Logo}
                alt="logo"
                className="logo-img"
              />
            </Link>
            <div className="nav-links">
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                categories
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/product/19"
              >
                product page
              </Link>
              <i
                data-array-length={cartData.length}
                onClick={openCart}
                className={`fa-solid fa-cart-shopping ${
                  cartData.length < 1 ? "cart-icon" : "cart-icon with-items"
                }`}
              ></i>
            </div>
            <div className="hamburger-menu">
              <i
                data-array-length={cartData.length}
                onClick={openCart}
                className={`fa-solid fa-cart-shopping hamburger-cart ${
                  cartData.length < 1 ? "cart-icon" : "cart-icon with-items"
                }`}
              ></i>
              <i
                onClick={() => setMobileNav(!mobileNav)}
                className="fa-solid fa-bars hamburger-hamb"
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
