import React from "react";

const About = () => {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom- big">
          <h2 className="heading-secondary">
            Exciting tours for adventures poeple
          </h2>
        </div>
        <div className="story">
          <div className="story__content">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You are going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              commodi repudiandae quisquam eaque impedit! Libero asperiores
              reiciendis officia non ullam consectetur earum numquam in
              corrupti, dolores, porro minus, unde hic.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              commodi repudiandae quisquam eaque impedit! Libero asperiores
              reiciendis officia non ullam consectetur earum numquam in
              corrupti, dolores, porro minus, unde hic.
            </p>
            <li  className="btn-text">
              Learn More &rarr;
            </li>
          </div>
          <div className="story__pics">
            <img
              srcset="assets/img/nat-1.jpg 300w, assets/img/nat-1-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="pic 1"
              className="story__img story__img--1"
              src="assets/img/nat-1-large.jpg"
            />
            <img
              srcset="assets/img/nat-2.jpg 300w, assets/img/nat-2-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="pic 2"
              className="story__img story__img--2"
              src="assets/img/nat-2-large.jpg"
            />
            <img
              srcset="assets/img/nat-3.jpg 300w, assets/img/nat-3-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="pic 3"
              className="story__img story__img--3"
              src="assets/img/nat-3-large.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
