import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { setIsCartOpen } = useContext(CartContext);

  const close = () => {
    setIsCartOpen(false);
  };

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div onMouseLeave={close} className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
