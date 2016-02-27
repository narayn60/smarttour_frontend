import React from 'react';
import '../../css/leaflet.scss';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import LeafMap from '../components/leaflet/LeafMap';
import ReactDOM from 'react-dom';

export default class TourMap extends React.Component {
    render() {
        return (
            <LeafMap />
        );
    }
}
