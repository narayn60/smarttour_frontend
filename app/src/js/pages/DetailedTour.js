import React from "react";
import TourDetailed from "../components/sub/TourDetailed";

export default class DetailedTour extends React.Component {

  render() {

    return (
      <div style={{marginTop: '16px'}}>
        <TourDetailed tour_id={this.props.params.id}/>
      </div>
    );
  }
}
