import alt from '../alt';
import GuideActions from '../actions/GuideActions';

class GuideStore {
  constructor() {
    this.bindActions(GuideActions);

    this.state = {
      guides: [],
      guide: null,
      followers: [],
      following: []
    };
  }

  onUpdateGuides(guide) {
    this.setState({ guides: this.state.guides.concat(guide) });
  }

  onUpdateFollowers(guides) {
    this.setState({ followers: this.state.followers.concat(guides) });
  }

  onUpdateFollowing(guides) {
    this.setState({ following: this.state.followers.concat(guides) });
  }

  onUpdateGuide(guide) {
    this.setState({ guide: guide});
  }

  onFetchGuides(guides) {
    this.setState({ guides: [] });
  }

  onFetchMyFollowers(guides) {
    this.setState({ followers: [] });
  }

  onFetchMyFollowing(guides) {
    this.setState({ following: [] });
  }

  onFetchFollowers(guides) {
    this.setState({ followers: [] });
  }

  onFetchFollowing(guides) {
    this.setState({ following: [] });
  }

  onGuidesFailed(errorMessage) {
    console.log("GuideStore error: ", errorMessage);
    this.state.errorMessage = errorMessage;
  }
}

export default alt.createStore(GuideStore, 'GuideStore');
