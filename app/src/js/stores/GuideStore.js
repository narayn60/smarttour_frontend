import alt from '../alt';
import GuideActions from '../actions/GuideActions';

class GuideStore {
  constructor() {
    this.bindActions(GuideActions);

    this.state = {
      guides: [],
      guide: null
    };
  }

  onUpdateGuides(guide) {
    this.setState({ guides: this.state.guides.concat(guide) });
  }

  onUpdateGuide(guide) {
    this.setState({ guide: guide});
  }

  onFetchGuides(guides) {
    this.setState({ guides: [] });
  }

  onFetchMyFollowers(guides) {
    this.setState({ guides: [] });
  }

  onFetchMyFollowing(guides) {
    this.setState({ guides: [] });
  }

  onGuidesFailed(errorMessage) {
    console.log("Guides failed");
    this.state.errorMessage = errorMessage;
    console.log(errorMessage);
  }
}

export default alt.createStore(GuideStore, 'GuideStore');
