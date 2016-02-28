import React from "react";
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

export default class Guide extends React.Component {
  render() {
    const { name, photo, bio, id } = this.props;
    var dummy_photo = "img/team/3.jpg";

    return (
        <div class="col-sm-4">
            <div class="team-member" >
                <img src= { dummy_photo } class="img-responsive img-circle" alt=""/>
                <Link to={`/guides/${id}`} class="portfolio-link">
                    <h4>{name}</h4>
                </Link>
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
