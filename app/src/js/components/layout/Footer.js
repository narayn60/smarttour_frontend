import React from 'react';

export default class Footer extends React.Component {

  render() {

    //TODO: Change these to links
    return (
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#"><i class="fa fa-facebook fa-2x"></i></a>
          <a href="#"><i class="fa fa-twitter fa-2x"></i></a>
          <a href="#"><i class="fa fa-github fa-2x"></i></a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a href="/">Home</a>
            ·
            <a href="/about">About</a>
            ·
            <a href="#">Contact us</a>
          </p>
          <p>Jaffna &copy; 2016</p>
			  </div>

		  </footer>
    );
  }

}
