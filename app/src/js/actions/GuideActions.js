import alt from 'alt_base';
import GuideSource from 'GuideSource';

class GuideActions {
  constructor() {
    this.stores = {GuideSource: new GuideSource()
    };
    this.generateActions('updateGuides', 'updateGuide');
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
          this.updateGuide(guide);
        })
        .catch((errorMessage) => {
          console.log("Guides failed");
          this.guidesFailed(errorMessage);
        });
    };
  }


  guidesFailed(errorMessage) {
    return errorMessage;
  }

}

export default alt.createActions(GuideActions);
