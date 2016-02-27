import React from "react";

export default class Tour extends React.Component {
  render() {
    const { title, owner } = this.props;

    return (
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img src="img/portfolio/roundicons.png" class="img-responsive" alt=""/>
            </a>
            <div class="portfolio-caption">
                <h4>{ title }</h4>
                <p class="text-muted">{ owner }</p>
            </div>
        </div>
    );
  }
}
