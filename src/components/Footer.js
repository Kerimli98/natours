import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer__logo-box">
      <picture class="footer__logo">
                    <source srcset="assets/img/logo-green-small-1x.png 1x, assets/img/logo-green-small-2x.png 2x"
                            media="(max-width: 37.5em)"/>
                    <img srcset="assets/img/logo-green-1x.png 1x, assets/img/logo-green-2x.png 2x" alt="Full logo" src="assets/img/logo-green-2x.png"/>
                </picture>

      </div>
      <div className="footer__content-container">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <li class="footer__link">Company</li>
            </li>
            <li class="footer__item">
              <li class="footer__link">Contact us</li>
            </li>
            <li class="footer__item">
              <li class="footer__link">Carrers</li>
            </li>
            <li class="footer__item">
              <li class="footer__link">Privacy policy</li>
            </li>
            <li class="footer__item">
              <li class="footer__link">Terms</li>
            </li>
          </ul>
        </div>
        <p class="footer__copyright">
          Copyright &copy; by <div className="footer__link">Fatima Karimli</div>
          . You are 100% allowed to use this webpage for both personal and
          commercial use.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
