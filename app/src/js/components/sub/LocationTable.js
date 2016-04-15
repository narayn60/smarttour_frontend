import React from "react";
import { Well, Button, Collapse, Image, Table } from "react-bootstrap";
import AuthStore from 'AuthStore';
import Global from 'Global';

export default class LocationTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: new Set()
    };
  }

  __toggleCollapse(i) {
    if (this.state.open.has(i)) {
      this.state.open.delete(i);
    } else {
      this.state.open.add(i);
    }
    this.setState({
      open: this.state.open
    });
  }


  render() {

    const locations = this.props.locations;
	  const path = Global.backend_url + AuthStore.getUid() + "/";

    console.log("Open", this.state.open);

    var locationTable = locations.map((location, i) =>
      [
      <tr onClick={() => this.props.onClick(i)}>
        <td style={{height: '100px', width: '100px'}}>
          <Image src={path + location.qrcode_path_s3} class="img-responsive" style={{objectFit: 'contain'}}/>
        </td>
        <td class="location-data">
          <h5>{location.name}</h5>
          <p>
            <i class="fa fa-map-marker"></i>
            { location.address }
          </p>
          <Button onClick={() => this.__toggleCollapse(i)}>
            Extra Info
          </Button>
        </td>
      </tr>,
        <Collapse in={this.state.open.has(i)}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
          </div>
        </Collapse>
      ]
    );

    return (
      <Table bordered condense hover class="tableSection">
        <tbody>
          { locationTable }
        </tbody>
      </Table>
    );
  }
}
