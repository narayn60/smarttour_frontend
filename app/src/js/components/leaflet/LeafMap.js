import React from 'react';
import config from './config'; 
import connectToStores from 'alt-utils/lib/connectToStores';

export default class LeafMap extends React.Component {

  constructor() {
    super();
    this.map = {};
    this.state = {
      tileLayer : null,
      geojsonLayer: null,
      geojson: null,
      filter: '*',
      numEntrances: null
    };
    this.markers = null;
    this.firstcall = true;
  }

  // panToPoint() called twice because of issues with Leaflet
  componentWillReceiveProps() {
    console.log("First call", this.props.points);
    if (this.firstcall && this.props.points.length > 0) {
      let point = this.props.points[0];
      // this.map.setView([point.latitude,  point.longitude], 17);
      // this.map.setView([point.latitude,  point.longitude], 17);
      this.props.updateState(0);
      this.firstcall = false;
      this.loadInitialPoints();
    }
    this.panToPoint();
  }

  // Needs to be because leaflet needs to render first
  componentDidMount() {
    if (process.env.BROWSER) {
      require('leaflet');
      this.init('map');
    }
  }

  componentWillUnmount() {
    if (process.env.BROWSER) {
      this.map.off('click', this.onMapClick); 
      this.map = null;
      this.markers.map((marker) =>
                       marker.off('click', this.selectMarker.bind(this)));
      this.markers = null;
    }
  }

  componentDidUpdate() {
    this.panToPoint();
  }

  // Pan to the selected point
  panToPoint() {
    if (this.props.selectedindex !== null) {
      let point = this.props.points[this.props.selectedindex];
      this.map.panTo([point.latitude, point.longitude]);
    }
  }


  init(id) {
    // this function creates the Leaflet map object and is called after the Map component mounts
    let map = this.map = L.map(id, config.params).locate({setView: true, maxZoom: 17});
    var latestPolyLine; //store the latest polyline so we can delete the previous layer when new added

    // Map config
    L.control.zoom({ position: "bottomleft"}).addTo(map);
    L.control.scale({ position: "bottomleft"}).addTo(map);
    L.Icon.Default.imagePath = '../../../img/leaflet/';

    // set our state to include the tile layer
    this.state.tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);
    this.setState({tileLayer: this.state.tileLayer});

    // map.on('click', this.markerAnnounce.bind(this));
  }

  selectMarker(e) {
    this.map.panTo(e.latlng);
    this.props.updateState(e.target.marker_index);
  }

  loadInitialPoints() {
    this.markers = this.props.points.map((point, i) => {
      const marker = L.marker([point.latitude, point.longitude]);
      marker.marker_index = i;
      marker.on('click', this.selectMarker.bind(this));
      marker.addTo(this.map);
      return marker;
    });
  }

  // markerAnnounce(e) {
  //   this.createPolyLine(e);
  //   this.dropMarker(e);
  // }

  // createPolyLine(e) {
  //   if (this.pointList.length !== 0) {
  //     this.map.removeLayer(this.latestPolyLine);
  //   }
  //   this.pointList.push(e.latlng);
  //   var firstpolyline = new L.Polyline(this.pointList, {
  //     color: 'red',
  //     weight: 3,
  //     opacity: 0.5,
  //     smoothFactor: 1
  //   });
  //   firstpolyline.addTo(this.map);
  //   this.latestPolyLine = firstpolyline;
  // }

  // dropMarker(e) {
  //   L.marker(e.latlng).addTo(this.map);
  // }

  render() {

    return (
        <div id='map'></div>
    );
  }
}
