import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';

const CartWidget = () => {
  const { state } = useCart();

  const cartItemCount = state.cart.length;

  return (
    <div className="cart-widget mt-2">
      <i className="bi bi-cart"></i>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="badge bg-primary">{cartItemCount}</span>
    </div>
  );
}

export default CartWidget;
