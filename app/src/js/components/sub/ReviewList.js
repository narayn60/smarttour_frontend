import React from 'react';

export default class ReviewList extends React.Component {

  constructor(props) {
    super(props);
    this.reviews = [3, 4, 5]; // Temporary
  }

  render() {

    const reviews = this.reviews.map((review, i) => {
      return (
        <div class="media">
          <a class="pull-left" href="#">
            <img class="media-object" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
          </a>
          <div class="media-body">
            <h4 class="media-heading">John Doe</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul class="list-unstyled list-inline media-detail pull-left">
              <li><i class="fa fa-calendar"></i>27/02/2014</li>
              <li><i class="fa fa-thumbs-up"></i>13</li>
            </ul>
            <ul class="list-unstyled list-inline media-detail pull-right">
              <li class=""><a href="">Like</a></li>
              <li class=""><a href="">Reply</a></li>
            </ul>
          </div>
        </div>
      );
    });


    return (
      <div>
        <section class="content-item" id="comments">
          <h3>{this.reviews.length} Reviews </h3>
          {reviews}
        </section>
      </div>
    );
  }

}
