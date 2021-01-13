import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  AddButton,
  PriceEl,
  NameEl,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameEl className="name">{name}</NameEl>
        <PriceEl className="price">{price}</PriceEl>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
