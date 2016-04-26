import alt from 'alt_base';
import ReviewSource from 'ReviewSource';

class ReviewActions {

	constructor() {
		this.state = {
			reviews: []
		};
		this.stores = {
			ReviewSource: new ReviewSource
		}
		this.generateActions('updateReviews')
	}

	createReview(review) {
		return (dispatch) => {
			dispatch();
			this.stores.ReviewSource.create(review)
				.then((reviews) => {

				})
				.catch((errorMessage) => {
					this.reviewsFailed(errorMessage);
				});
		};
	}

	reviewsFailed(errorMessage) {
		return errorMessage;
	}
}

export default alt.createActions(ReviewActions);
