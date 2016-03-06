import React from 'react'
import { Row, Col, form, Input, Button } from "react-bootstrap";

export default class TourFormFields extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			name: props.fieldValues.name,
			genre: props.fieldValues.genre,
			bio: props.fieldValues.bio,
			picture: props.fieldValues.picture,
		}
	}

	saveAndContinue() {
		var data = this.state
		this.props.saveValues(data)
		this.props.nextStep()
	}

	handleChange(name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
  	}

	render() {
		var genres = ['Entertainment', 'Historical', 'Art', 'Food & Drink', 'Educational', 'Adult', 'Different']
		const genreComponent = genres.map((genre, i) => <option key={i} value={genre}>{genre}</option>)

		 return (
			 <form>
				 <Input type="text" label="Tour Name" defaultValue={this.props.fieldValues.name} onChange={this.handleChange.bind(this, 'name')}/>
				 <Input type="select" label="Genre" defaultValue={this.props.fieldValues.genre} onChange={this.handleChange.bind(this, 'genre')}>
			     	{genreComponent}
			     </Input>
				 <Input type="textarea" label="Bio" defaultValue={this.props.fieldValues.bio} onChange={this.handleChange.bind(this, 'bio')}/>
				 <Input type="file" label="Picture" onChange={this.handleChange.bind(this, 'picture')}/>
				 <Button bsStyle="primary" onClick={this.saveAndContinue.bind(this)}>Save and Continue</Button>
			 </form>
 		)
	}
}