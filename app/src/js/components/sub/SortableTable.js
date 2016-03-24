import * as React from "react";
import { Table } from "react-bootstrap";
if (process.env.BROWSER) {
  var Sortable = require('sortablejs');
}

export default class SortableTable extends React.Component {

  sortableContainersDecorator = (componentBackingInstance) => {
    // check if backing instance not null
    if (componentBackingInstance) {

      let options = {
        handle: ".group-title" // Restricts sort start click/touch to the specified element
      };
      Sortable.create(componentBackingInstance, options);
    }
  };

  sortableGroupDecorator = (componentBackingInstance) => {
    // check if backing instance not null
    if (componentBackingInstance) {
      let options = {
        draggable: "tr", // Specifies which items inside the element should be sortable
        group: "shared"
      };
      Sortable.create(componentBackingInstance, options);
    }
  };

  render() {
    if (process.env.BROWSER) {
      return (
        <div className="container" ref={this.sortableContainersDecorator}>
          <div className="group">
            <h2 className="group-title">Group 1</h2>
            <div>
              <Table bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody ref={this.sortableGroupDecorator}>
                  {this.props.locations}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

/* <div>Swap them around</div>
   <div>Swap us around</div>
   <div>Swap things around</div>
   <div>Swap everything around</div> */

/* <div className="group-list" ref={this.sortableGroupDecorator}> */
