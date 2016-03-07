// js/components/leaflet/LeafMap.js
import React from 'react';
import config from './config'; 


export default class LeafMap extends React.Component {

  constructor() {
    super();
    this.pointList = [];
    this.map = {};
    this.state = {
      tileLayer : null,
      geojsonLayer: null,
      geojson: null,
      filter: '*',
      numEntrances: null,
    };
  }

  componentDidMount() {
    if (process.env.BROWSER) {
      require('leaflet');
      this.init('map');
    }
    var points = [
      {
        long: -2.6183652319014072,
        lat: 51.453766227989604
      },
      {
        long: -2.6171636022627354,
        lat: 51.45420747748235
      },
      {
        long: -2.616101447492838,
        lat: 51.45366594341915
      },
    ];
    // this.loadInitialPoints(points);
  }

  componentWillUnmount() {
    if (process.env.BROWSER) {
      this.map.off('click', this.onMapClick); 
      this.map = null;
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

    this.setState({
      tileLayer: this.state.tileLayer
    });
    map.on('click', this.markerAnnounce.bind(this));
  }

  loadInitialPoints(points) {
    for (let point of points) {
      var marker = L.marker([point.long, point.lat]).addTo(this.map);
      this.map.panTo(new L.LatLng(point.long, point.lat));
    }
  }

  markerAnnounce(e) {
    this.createPolyLine(e),
    // this.onMapClick(e),
    this.dropMarker(e)
  }

  createPolyLine(e) {
    if (this.pointList.length !== 0) {
      this.map.removeLayer(this.latestPolyLine);
    }
    this.pointList.push(e.latlng);
    var firstpolyline = new L.Polyline(this.pointList, {
      color: 'red',
      weight: 3,
      opacity: 0.5,
      smoothFactor: 1
    });
    firstpolyline.addTo(this.map);
    this.latestPolyLine = firstpolyline;
  }

  onMapClick(e) {
    L.popup()
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(this.map);
  }

  dropMarker(e) {
    console.log(this.pointList);
    L.marker(e.latlng).addTo(this.map);
  }

  render() {
    return (
        <div id='map'></div>
    );
  }
}
