import React from "react"

export default class Service extends React.Component {
  render() {
    const { name, photo, bio } = this.props;

    return (
        <div class="col-md-4">
            <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">{ name }</h4>
            <p class="text-muted">{ bio }</p>
        </div>
    );
  }
}