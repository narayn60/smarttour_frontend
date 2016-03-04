import React from 'react';

export default class Footer extends React.Component {

  render() {

    return (
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a href="#">Home</a>
            ·
            <a href="#">Blog</a>
            ·
            <a href="#">Pricing</a>
          </p>
          <p>Jaffna &copy; 2016</p>
			  </div>

		  </footer>
    );
  }

}
