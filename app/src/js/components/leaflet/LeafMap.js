import React from 'react';
import config from './config'; 
import MapStore from 'MapStore';
import connectToStores from 'alt-utils/lib/connectToStores';

export default class LeafMap extends React.Component {

  constructor(props) {
    super(props);
    this.pointList = [];
    this.map = {};
    this.state = {
      tileLayer : null,
      geojsonLayer: null,
      geojson: null,
      filter: '*',
      numEntrances: null,
      points: this.props.points,
      selected: null
    };
  }

  static getStores() {
    return [MapStore];
  }

  static getPropsFromStores() {
    return MapStore.getState();
  }

  componentWillMount() {
    MapStore.listen(this.onChange.bind(this));
  }

  // Needs to be because leaflet needs to render first
  componentDidMount() {
    if (process.env.BROWSER) {
      require('leaflet');
      this.init('map');
      this.loadInitialPoints();
    }
  }

  componentWillUnmount() {
    if (process.env.BROWSER) {
      this.map.off('click', this.onMapClick); 
      this.map = null;
    }
    MapStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  // Pan to the selected point
  panToPoint() {
    if (this.state.selected !== null) {
      let point = this.state.points[this.state.selected];
      this.map.panTo([point.lat, point.long]);
    }
  }


  init(id) {
    // this function creates the Leaflet map object and is called after the Map component mounts
    var map = this.map = L.map(id, config.params)
          .locate({setView: true, maxZoom: 17});
    var pointList = this.pointList;
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

  loadInitialPoints() {
    this.state.points.map((point) =>
                          L.marker([point.lat, point.long]).addTo(this.map));
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

    this.panToPoint();

    return (
        <div id='map'></div>
    );
  }
}

export default connectToStores(LeafMap);
