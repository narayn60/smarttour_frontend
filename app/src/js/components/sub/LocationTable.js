import React from "react";
import { Table } from "react-bootstrap";
import ImageLoad from './ImageLoad';

export default class LocationTable extends React.Component {

  constructor(props) {
    super(props);
  }

  locationClicked(index) {
    this.props.onClick(index);
  }

  render() {

    var locations = this.props.locations;

    var locationTable = locations.map((location, i) =>
      <tr onClick={this.locationClicked.bind(this, i)}>
        <td>
          <ImageLoad path={"/" + location.qrcode_path_s3} />
        </td>
        <td class="location-data">
          <h4>{location.name}</h4>
          <p>
            <i class="fa fa-map-marker"></i>
            {location.address}
          </p>
        </td>
      </tr>);

    return (
      <div>
        <Table bordered condense hover class="tableSection" id="locations_list">
          <tbody>
            { locationTable }
          </tbody>
        </Table>
      </div>
    );
  }
}
