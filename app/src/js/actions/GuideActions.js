import alt from 'alt_base';
import GuideSource from 'GuideSource';

class GuideActions {
  constructor() {
    this.stores = {GuideSource: new GuideSource()
    };
    this.generateActions('updateGuides', 'updateGuide', 'updateFollowers', 'updateFollowing');
  }

  fetchGuides() {
    return (dispatch) => {
      dispatch();
      this.stores.GuideSource.fetch()
        .then((guides) => {
          this.updateGuides(guides);
        })
        .catch((errorMessage) => {
          this.guidesFailed(errorMessage);
        });
    };
    }

  fetchGuide(guide_id) {
    return (dispatch) => {
      dispatch();
      this.stores.GuideSource.fetch_guide(guide_id)
        .then((guide) => {
          this.fetchFollowers(guide.followers);
          this.fetchFollowing(guide.following);
          this.updateGuide(guide);
        })
        .catch((errorMessage) => {
          console.log("Guides failed");
          this.guidesFailed(errorMessage);
        });
    };
  }

  fetchMyFollowers() {
    return (dispatch) => {
      dispatch();
      this.stores.GuideSource.fetchMyFollowers()
        .then((guides) => {
          this.updateFollowers(guides);
        })
        .catch((errorMessage) => {
          this.guidesFailed(errorMessage);
        });
    };
  }

  fetchMyFollowing() {
    return (dispatch) => {
      dispatch();
      this.stores.GuideSource.fetchMyFollowing()
        .then((guides) => {
          this.updateFollowing(guides);
        })
        .catch((errorMessage) => {
          this.guidesFailed(errorMessage);
        });
    };
  }

  fetchFollowing(following_ids) {
    return (dispatch) => {
      dispatch();
      this.stores.GuideSource.fetchFollowing(following_ids)
        .then((guides) => {
          this.updateFollowing(guides);
        })
        .catch((errorMessage) => {
          this.guidesFailed(errorMessage);
        });
    };
  }

  fetchFollowers(follower_ids) {
    return (dispatch) => {
      dispatch();
      this.stores.GuideSource.fetchFollowers(follower_ids)
        .then((guides) => {
          this.updateFollowers(guides);
        })
        .catch((errorMessage) => {
          this.guidesFailed(errorMessage);
        });
    };
  }

  follow(guide) {
    return (dispatch) => {
      dispatch();
      this.stores.GuideSource.follow(guide)
        .then((guide) => {
          console.log("update followers + " , guide)
          this.fetchFollowers(guide.followers);
        })
        .catch((errorMessage) => {
          this.guidesFailed(errorMessage);
        });
    };
  }

  unfollow(guide) {
    return (dispatch) => {
      dispatch();
      this.stores.GuideSource.unfollow(guide)
        .then((guide) => {
          this.fetchFollowers(guide.followers);
        })
        .catch((errorMessage) => {
          this.guidesFailed(errorMessage);
        });
    };
  }

  guidesFailed(errorMessage) {
    return errorMessage;
  }

}

export default alt.createActions(GuideActions);
