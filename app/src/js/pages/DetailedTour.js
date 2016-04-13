import React from "react";
import TourDetailed from "../components/sub/TourDetailed";

export default class DetailedTour extends React.Component {

  render() {

    return (
      <div>
        <TourDetailed tour_id={this.props.params.id}/>
      </div>
    );
  }
}
