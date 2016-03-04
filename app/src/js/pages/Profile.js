import React from 'react';
import { Row, Col, Image, Button, Collapse, Well, Table, ListGroup, ListGroupItem } from "react-bootstrap";
import TourStore from 'TourStore';
import TourActions from 'TourActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Router, Route, Link, browserHistory } from 'react-router';

export default class Profile extends React.Component {

  currentUser() {
  	return ({ 
  		id: 1,
  		name: 'George Nash',
  		photo: 'img/team/3.jpg',
  		tours: [
	  		{
	  			name: 'Banksy',
	  			id: 1,
	  		},
	  		{
	  			name: 'Pubs',
	  			id: 2,
	  		},
	  		{
	  			name: 'History',
	  			id: 3,
	  		},
  		],
  	})
  }

  render() {

  	var user = this.currentUser();
    const MyTours = user.tours.map((tour) => 
    	<Link to={`/mytours/${tour.id}`}>
    		<ListGroupItem> {tour.name} </ListGroupItem> 
    	</Link>
    );

    return (
      <section id="portfolio" class="bg-light-gray">
        <div class="container">
        	<Row>
        		<h2> Welcome, { user.name } </h2>
        	</Row>
        	<Row>
        		<h3> Personal info </h3>
        		<p> Number of followers: 500 </p>
        		<p> Number of tours: 10 </p>
        		<Image src= {user.photo}/>
        	</Row>
        	<Row>
        		<h3> My tours </h3>
        		   <ListGroup>
                <Link to={`/mytours/1`}>
                <ListGroupItem> Hello </ListGroupItem> 
                </Link>
				  </ListGroup>
        	</Row>
        </div>
      </section>
    );
  }
}

// {MyTours}
