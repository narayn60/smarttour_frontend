import React from 'react';
import Global from 'Global';
import AuthStore from 'AuthStore';
import StarRating from 'react-star-rating';
import { Button } from "react-bootstrap";
import ReviewActions from 'ReviewActions';
import pluralize from 'pluralize';

export default class ReviewList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {review_text: '', review_rating: 0, review_submitted: false};
  }

  handleChange(e) {
    this.setState({review_text: e.target.value});
  }  

  submitReview() {
    var review = {review_text: this.state.review_text, review_rating: this.state.review_rating, tour_id: this.props.tour_id};
    ReviewActions.createReview(review);
    this.setState({review_submitted: true});
  }

  ratingClick(e, things) {
    this.setState({review_rating: things.rating});
  }

  render() {

    var submitReview = <div></div>;
    if (this.state.review_submitted === false && this.props.personal === false) {
      submitReview = (
          <ul class="list-unstyled review-list">
            <li> <input class="review-input" type="text" value={this.state.review_text} onChange={this.handleChange.bind(this)} placeholder="Leave your own review"/></li>
            <li><StarRating name="review-rating" totalStars={5} size={25} onRatingClick={this.ratingClick.bind(this)}/></li>
            <li><Button bsStyle="success" onClick={() => this.submitReview()}>Submit</Button></li>
          </ul>
      );
    }
    else {
      if (this.props.personal === false) {
        submitReview = (<h4> Thanks! </h4>);  
      }
    }

    const base_url = Global.backend_url + AuthStore.getUid() + "/";

    const reviews = this.props.reviews.map((review, i) => {
      const full_date = new Date(review.date);
      const shortened_date = full_date.getUTCDate() + "/" + (full_date.getUTCMonth() + 1) + "/" + full_date.getUTCFullYear();
      return (
        <div class="media">
          <a class="pull-left" href="#">
            <img class="media-object" src={base_url + review.reviewer.photo_path_s3} alt=""/>
          </a>
          <a>{review.reviewer.full_name}</a>
          <div class="media-body">
            <h4 class="media-heading">{review.reviewer.full_name}</h4>
            <p>{review.review_text}</p>
            <ul class="list-unstyled list-inline media-detail pull-left">
              <li><i class="fa fa-calendar"></i>{shortened_date}</li>
              <li><StarRating name="review-rating" totalStars={5} size={15} rating={review.review_rating} disabled={true}/></li>
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
          <h4 className="group-title">{pluralize('Review', this.props.reviews.length, true)}</h4>
          {submitReview}
          <hr/>
          {reviews}
        </section>
      </div>
    );
  }
}
