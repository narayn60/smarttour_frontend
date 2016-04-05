/* import React, {PropTypes, Component} from 'react/addons'; */
import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place';

export default class TourMap extends React.Component {
  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 17,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    const pntSelected = this.props.selected;
    var mapCenter = this.props.center;
    var point;
    const markers = this.props.locations.map((point, i) =>
      <MyGreatPlace onClick={() => this.props.handleClick(i)} lat={point.latitude} lng={point.longitude} text={point.name} key={i} />
    );

    if (pntSelected !== null) {
      point = this.props.locations[pntSelected];
      mapCenter =  {lat: Number(point.latitude), lng: Number(point.longitude)};
    } else if (this.props.locations.length > 0) {
      point = this.props.locations[0];
      mapCenter =  {lat: Number(point.latitude), lng: Number(point.longitude)};
    }

    return (
      <GoogleMap
        bootstrapURLKeys={{
            key: 'AIzaSyDxORdzn1kbUMJzvs6rScP4_jXTw5LDBik'
          }} 
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        center={mapCenter}>
        {markers}
      </GoogleMap>
    );
  }
}



