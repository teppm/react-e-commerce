import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
