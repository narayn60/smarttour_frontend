import React from "react";
import TourDetailed from "../components/sub/TourDetailed";

export default class DetailedTour extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const DetailedTourPage = <TourDetailed tour_id={this.props.params.id}/>;

    return (
        <div>
          {DetailedTourPage}
        </div>
    );
  }
}
