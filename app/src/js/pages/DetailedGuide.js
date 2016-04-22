import React from "react";
import TourGuideDetailed from "../components/sub/TourGuideDetailed";

export default class DetailedGuide extends React.Component {

  render() {
    console.log("Render detailedguide page");

    return (
      <div style={{marginTop: '16px'}}>
        <TourGuideDetailed guide_id={this.props.params.id}/>
      </div>
    );
  }
}
