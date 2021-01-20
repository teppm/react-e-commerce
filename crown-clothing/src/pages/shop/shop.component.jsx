import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {
  firestore,
  convertCollectionSnapshopToMap,
} from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/crown-clothing-ce1a8/databases/(default)/documents/collections/'
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));
    // above example of fetch

    collectionRef.get().then(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshopToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
