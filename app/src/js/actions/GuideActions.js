import alt from 'alt_base';
import GuideSource from 'GuideSource';

class GuideActions {
  constructor() {
    var dummy_photo = "img/team/3.jpg";
    this.state = {
      guides: []
    };
  }

  fetchGuides() {
    return (dispatch) => {
      dispatch();
      var gs = new GuideSource();
      gs.fetch()
        .then((guides) => {
          this.updateGuide(guides);
        })
        .catch((errorMessage) => {
          this.guidesFailed(errorMessage)
        });
      }
    }

  guidesFailed(errorMessage) {
    return errorMessage;
  }

  updateGuide(guide) {
    return (guide);
  }
}

export default alt.createActions(GuideActions);
