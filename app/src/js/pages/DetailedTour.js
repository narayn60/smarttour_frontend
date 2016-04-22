import React from "react";
import TourDetailed from "../components/sub/TourDetailed";

export default class DetailedTour extends React.Component {

  render() {
    console.log("Render detailedtour page");

    return (
      <div style={{marginTop: '16px', paddingBottom: '16px'}}>
        <TourDetailed tour_id={this.props.params.id}/>
      </div>
    );
  }
}
