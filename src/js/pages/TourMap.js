import React from 'react';
import '../../css/leaflet.scss';
import LeafMap from '../components/leaflet/LeafMap';
import ReactDOM from 'react-dom';

export default class TourMap extends React.Component {
    render() {
        return (
            <LeafMap />
        );
    }
}
