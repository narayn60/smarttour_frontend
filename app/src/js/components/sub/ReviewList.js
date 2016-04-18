import React from 'react';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class ReviewList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log("Reviews are", this.props.reviews);

    const base_url = Global.backend_url + AuthStore.getUid() + "/";

    const reviews = this.props.reviews.map((review, i) => {
      const full_date = new Date(review.date);
      const shortened_date = full_date.getUTCDate() + "/" + (full_date.getUTCMonth() + 1) + "/" + full_date.getUTCFullYear();
      return (
        <div class="media">
          <a class="pull-left" href="#">
            <img class="media-object" src={base_url + review.reviewer.photo_path_s3} alt=""/>
          </a>
          <div class="media-body">
            <h4 class="media-heading">{review.reviewer.full_name}</h4>
            <p>{review.review_text}</p>
            <ul class="list-unstyled list-inline media-detail pull-left">
              <li><i class="fa fa-calendar"></i>{shortened_date}</li>
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
        <section class="border_box content-item" id="comments">
          <h4 className="group-title">{this.props.reviews.length} Reviews</h4>
          <hr/>
          {reviews}
        </section>
      </div>
    );
  }

}
