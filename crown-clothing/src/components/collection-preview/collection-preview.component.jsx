import React from 'react';

import CollectionItem from '../../components/collection-items/collection-item.component';

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
