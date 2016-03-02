import React from 'react';
import { Row, Col, Image, Button, Collapse, Well, Table, ListGroup, ListGroupItem } from "react-bootstrap";

export default class Profile extends React.Component {

  currentUser() {
  	return ({ 
  		id: 1,
  		name: 'George Nash',
  		photo: 'img/team/3.jpg',
  	})
  }

  render() {

  	var user = this.currentUser()

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
				    <ListGroupItem>Banksy</ListGroupItem>
				    <ListGroupItem>Pub Tours</ListGroupItem>
				    <ListGroupItem>Museums</ListGroupItem>
				  </ListGroup>
        	</Row>
        </div>
      </section>
    );
  }
}
