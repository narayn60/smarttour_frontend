import React from 'react';
import TourStore from '../../stores/TourStore';
import TourActions from '../../actions/TourActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import Tour from '../sub/Tour';

export default class TourContainer extends React.Component {

  constructor() {
    super();
    this.state = TourStore.getState();
  }

  static getStores() {
    return [TourStore];
  }

  static getPropsFromStores() {
    return TourStore.getState();
  }

  componentDidMount() {
    TourStore.listen(this.onChange.bind(this));
    TourActions.fetchTours();

  }

  componentWillUnmount() {
    TourStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  createTour() {
    TourActions.updateTours(Date.now());
  }

  fetchTours() {
    TourActions.fetchTours();
  }

  render() {
    const ToursComponent = this.state.tours.map((title, i) => <Tour key={i} title={title}/>);

    return (
      <div class="row">
        <button onClick={this.createTour.bind(this)}>Click Me</button>
        <button onClick={this.fetchTours.bind(this)}>Reload</button>
        {ToursComponent}
      </div>
    );
  }
}

export default connectToStores(TourContainer);

