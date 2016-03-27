import alt from '../alt';
import GuideActions from '../actions/GuideActions';

class GuideStore {
  constructor() {
    // this.bindListeners({
    //   handleUpdateGuide: GuideActions.updateGuide,
    //   handleFetchGuides: GuideActions.fetchGuides,
    //   handleGuidesFailed: GuideActions.guidesFailed
    // });
    this.bindActions(GuideActions);

    this.state = {
      guides: []
    };
  }

  onUpdateGuide(guide) {
    this.setState({ guides: this.state.guides.concat(guide) });
  }

  onFetchGuides(guides) {
    this.setState({ guides: [] });
  }

  onGuidesFailed(errorMessage) {
    console.log("Guides failed");
    this.state.errorMessage = errorMessage;
    console.log(errorMessage);
  }
}

export default alt.createStore(GuideStore, 'GuideStore');
