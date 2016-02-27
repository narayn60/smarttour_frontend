import React from "react";

export default class Guide extends React.Component {
  render() {
    const { name, photo, bio } = this.props;

    return (
        <div class="col-sm-4">
            <div class="team-member">
                <img src={photo} class="img-responsive img-circle" alt=""/>
                <h4>{name}</h4>
                <p class="text-muted">{bio}</p>
                <ul class="list-inline social-buttons">
                    <li><a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}
