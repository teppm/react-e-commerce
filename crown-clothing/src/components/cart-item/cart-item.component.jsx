import React from 'react';

import {
  CartItemContainer,
  CartItemDetails,
  NameContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <CartItemDetails>
      <NameContainer> {name} </NameContainer>
      <span className="price">
        {quantity} x {price}$
      </span>
    </CartItemDetails>
  </CartItemContainer>
);

export default CartItem;
