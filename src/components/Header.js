import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
    <Navigation />

    <header className="header">
      <div className="header__logo-box">
        <img
          src="assets/img/logo-white.png"
          alt="logo"
          className="header__logo"
        />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <li className="btn btn--white btn--animated">
          Discover our tours
        </li>
      </div>
    </header>
    </>
  );
};

export default Header;
