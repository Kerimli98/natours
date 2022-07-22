import React from "react";

const Story = () => {
  return (
    <section className="stories-outer-div">
      <div class="bg-video">
        <video class="bg-video__content" autoplay="true" muted="true" loop="true" playsinline >
          <source src="assets/img/video.mp4" type="video/mp4" />
          <source src="assets/img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="card-heading u-center-text u-margin-bottom- big">
        <h2 className=" heading-secondary">WE MAKE PEOPLE GENUINELY HAPPY</h2>
      </div>
      <div className="section-stories">
        <div class="story-happy">
          <figure class="story-happy__shape">
            <img
              src="assets/img/nat-8.jpg"
              alt="Person on a tour"
              class="story-happy__img"
            />
            <figcaption class="story-happy__caption">Mary Smith</figcaption>
          </figure>
          <div class="story-happy__text">
            <h3 class="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
        <div class="story-happy">
          <figure class="story-happy__shape">
            <img
              src="assets/img/nat-9.jpg"
              alt="Person on a tour"
              class="story-happy__img"
            />
            <figcaption class="story-happy__caption">Jack Wilson</figcaption>
          </figure>
          <div class="story-happy__text">
            <h3 class="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>
      <div class="u-center-text u-margin-top-huge">
        <li class="btn-text">
          Read all stories &rarr;
        </li>
      </div>
    </section>
  );
};

export default Story;
