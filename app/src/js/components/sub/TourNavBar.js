import React from 'react';
import Global from 'Global';
import AuthStore from 'AuthStore';

import { Nav, NavItem } from "react-bootstrap";


export default class TourNavBar extends React.Component {

	constructor() {
	    super();
	    this.handleSelect = this.handleSelect.bind(this);
  	}
    	
	handleSelect(selectedKey) {
	}

	render() {

		var genres = ['Entertainment', 'Historical', 'Art', 'Food & Drink', 'Educational', 'Adult', 'Different'];
   		const genreComponent = genres.map((genre, i) => <NavItem eventKey={i} key={i} title={genre}>{genre}</NavItem>);

		return (
			<Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect} class="tourNavBar">
				{genreComponent}
			</Nav>
		);
  }
}

