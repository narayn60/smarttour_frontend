import React from "react";
import { Image, Table } from "react-bootstrap";
import AuthStore from 'AuthStore';
import Global from 'Global';

export default class LocationTable extends React.Component {

  constructor(props) {
    super(props);
  }

  locationClicked(index) {
    this.props.onClick(index);
  }

  render() {

    const locations = this.props.locations;
	  const path = Global.backend_url + AuthStore.getUid() + "/";

    var locationTable = locations.map((location, i) =>
      <tr onClick={this.locationClicked.bind(this, i)}>
        <td style={{height: '100px', width: '100px'}}>
          <Image src={path + location.qrcode_path_s3} class="img-responsive" style={{objectFit: 'contain'}}/>
        </td>
        <td class="location-data">
          <h5>{location.name}</h5>
          <p>
            <i class="fa fa-map-marker"></i>
            { location.address }
          </p>
        </td>
      </tr>);

    return (
      <Table bordered condense hover class="tableSection">
        <tbody>
          { locationTable }
        </tbody>
      </Table>
    );
  }
}
