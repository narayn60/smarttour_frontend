import React from 'react';
import GuideStore from 'GuideStore';
import GuideActions from '../../actions/GuideActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import TourGuide from '../sub/TourGuide';

export default class TourGuideContainer extends React.Component {

  constructor() {
    super();
    this.state = GuideStore.getState();
    }

  static getStores() {
    return [GuideStore];
  }

  static getPropsFromStores() {
    return GuideStore.getState();
  }

  componentWillMount() {
    GuideStore.listen(this.onChange.bind(this));
    GuideActions.fetchGuides();
  }

  componentWillUnmount() {
    GuideStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  reloadGuides() {
    GuideActions.fetchGuides();
  }

  createGuide() {
    var profile_photo = "img/team/4.jpg";
    var guide = {name: 'Jeff Bridges', bio: 'The boss.', photo: profile_photo};
    GuideActions.updateGuide(guide);
  }

  render() {
    const GuidesComponent = this.state.guides.map((guide, i) => <TourGuide key={i} name={guide.name} bio={guide.bio} photo={guide.photo} id={guide.id}/>);

    return (
      <div>
        <div class="row text-center">
          <button onClick={this.reloadGuides.bind(this)}>Reload Guides</button>
          <button onClick={this.createGuide.bind(this)}>Create Guide</button>
          <h2 class="section-heading">Guides</h2>
          <h3 class="section-subheading">Explore</h3>
        </div>
        <div class="row">
          {GuidesComponent}
        </div>
      </div>
    );
  }
}

export default connectToStores(TourGuideContainer);

