import alt from '../alt';
import GuideActions from '../actions/GuideActions';

class GuideStore {
  constructor() {
    this.bindListeners({
      handleUpdateGuide: GuideActions.updateGuide,
      handleFetchGuides: GuideActions.fetchGuides,
      handleGuidesFailed: GuideActions.guidesFailed
    });

    this.state = {
      guides: []
    };
  }

  handleUpdateGuide(guide) {
    this.setState({ guides: this.state.guides.concat(guide) });
  }

  handleFetchGuides(guides) {
    this.setState({ guides: [] });
  }

  handleGuidesFailed(errorMessage) {
    console.log("Guides failed");
    this.state.errorMessage = errorMessage;
    console.log(errorMessage);
  }
}

export default alt.createStore(GuideStore, 'GuideStore');
