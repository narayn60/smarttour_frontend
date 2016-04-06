import React from "react";
import { Table } from "react-bootstrap";
import ImageLoad from './ImageLoad';

export default class LocationTable extends React.Component {

	constructor(props) {
		super(props);
	}

	locationClicked(index) {
		console.log(index)
	}

	render() {

		var locations = this.props.locations

    	var locationTable = locations.map((location, i) => 
    		<tr onClick={this.locationClicked.bind(this, i)}>
    			<td> 
    				<ImageLoad path={"/" + location.qrcode_path_s3} /> 
    			</td>
    			<td>
    				<h4>{location.name}</h4>
    				<p>
    					<i class="fa fa-pencil"></i> 
    					{location.note}
    				</p>
    			</td>
    		</tr>);

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