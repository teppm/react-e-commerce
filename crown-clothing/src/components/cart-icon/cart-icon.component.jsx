import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/original.svg';
import { createStructuredSelector } from 'reselect';

import { CartIconContainer, ItemCounter } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCounter className="item-count">{itemCount}</ItemCounter>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
