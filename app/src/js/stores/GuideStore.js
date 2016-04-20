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
    console.log(guides)
    this.setState({ followers: guides });
  }

  onUpdateFollowing(guides) {
    this.setState({ following: guides });
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

  onFollow(guide) {
    this.setState({ followers: this.state.followers.concat(guide) });
  }

  onGuidesFailed(errorMessage) {
    console.log("GuideStore error: ", errorMessage);
    this.state.errorMessage = errorMessage;
  }
}

export default alt.createStore(GuideStore, 'GuideStore');
