import React from "react";
import { Table } from "react-bootstrap";

export default class LocationTable extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {

		var locations = this.props.locations
    	var locationTable = locations.map((location, i) => <tr><td>{location.position}</td><td><h3>{location.name}</h3><p><i class="fa fa-pencil"></i> {location.note}</p></td></tr>);

		return (
			<div>
				<Table bordered condense hover class="tableSection">
					<tbody>
						{ locationTable }
					</tbody>
				</Table>
			</div>
			)
		}
	}