import React from 'react';
import Global from 'Global';
import AuthStore from 'AuthStore';

import { Nav, NavItem } from "react-bootstrap";


export default class TourNavBar extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	tours: props.tours
	  	};
	    this.handleSelect = this.handleSelect.bind(this);
	    this.genreCount = this.genreCount.bind(this);
	}

	handleSelect(selectedKey) {
		var genres = ['All', 'Entertainment', 'Historical', 'Art', 'Food & Drink', 'Educational', 'Adult', 'Different'];
		this.props.onClick(genres[selectedKey]);
	}

	genreCount(genre) {
		if (genre === 'All') {
			return this.props.tours.length;
		}
		else {
			return this.props.tours.filter(tour => tour.genre === genre).length;
		}
	}

	render() {
		var genres = ['All', 'Entertainment', 'Historical', 'Art', 'Food & Drink', 'Educational', 'Adult', 'Different'];
   		const genreComponent = genres.map((genre, i) => <NavItem eventKey={i} key={i} title={genre}>{genre} {this.genreCount(genre)} </NavItem>);

		return (
			<Nav activeKey={1} onSelect={this.handleSelect} class="tourNavBar">
				{genreComponent}
			</Nav>
		);
  	}
}

