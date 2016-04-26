import alt from 'alt_base';
import ReviewActions from 'ReviewActions';

class ReviewStore {
  constructor() {
    this.bindActions(ReviewActions);
    this.errorMessage = null;
  }

  onReviewsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(ReviewStore, 'ReviewStore');
