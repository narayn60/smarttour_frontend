import React from "react";
import TourGuideDetailed from "../components/sub/TourGuideDetailed";
import GuideStore from "../stores/GuideStore";

export default class DetailedGuide extends React.Component {

  constructor() {
    super();
    this.state = {
      guides: GuideStore.getState()
    };
    this.findGuide = this.findGuide.bind(this);
  }

  findGuide(guide) { 
    return guide.id == this.props.params.id;
  } 

  render() {
    var guide = this.state.guides.guides.find(this.findGuide);
    const DetailedGuidePage = <TourGuideDetailed guide = {guide}/>;

    return (
        <div>
          {DetailedGuidePage}
        </div>
    );
  }
}