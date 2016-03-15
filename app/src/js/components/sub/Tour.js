import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

export default class Tour extends React.Component {

  render() {
    const { name, owner, id } = this.props.tour;

    return (
        <div class="col-md-4 col-sm-6 portfolio-item">
            <Link to={`/browse/tours/${id}`} class="portfolio-link"> 
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src="img/portfolio/roundicons.png" class="img-responsive" alt=""/>
            </Link>
            <div class="portfolio-caption">
                <h4>{ name }</h4>
                <p class="text-muted">{ owner }</p>
            </div>
        </div>
    );
  }
}
