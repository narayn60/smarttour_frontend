import alt from 'alt_base';
import React from "react";
import TourStore from 'TourStore';
import TourDetailed from "../components/sub/TourDetailed";
import TourActions from 'TourActions';
import connectToStores from 'alt-utils/lib/connectToStores';

export default class DetailedTour extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   tours: TourStore.getState()
    // };
    // this.findTour = this.findTour.bind(this);
  }

  // static getStores() {
  //   return [TourStore];
  // }

  // static getPropsFromStores() {
  //   return TourStore.getState();
  // }

  // componentWillMount() {
  //   TourStore.listen(this.onChange.bind(this));
  //   TourActions.fetchTour(this.props.params.id);
  // }

  // componentWillUnmount() {
  //   TourStore.unlisten(this.onChange.bind(this));
  // }

  // onChange(state) {
  //   this.setState(state);
  // }

  // findTour(tour) { 
  //   return tour.id == this.props.params.id;
  // } 

  render() {
    // var tour = this.state.tours.tours.find(this.findTour);
    // const DetailedTourPage = <TourDetailed tour={this.state.tour}/>;
    const DetailedTourPage = <TourDetailed tour_id={this.props.params.id}/>;

    return (
        <div>
          {DetailedTourPage}
        </div>
    );
  }
}

// export default connectToStores(DetailedTour);
