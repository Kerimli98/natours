import React from "react";

const Booking = () => {
  return (
    <section className="section-book">
      <div className="book">
        <div className="book__form">
          <form className="form">
            <div class="u-margin-bottom-medium">
              <h2 class="heading-secondary">Start booking now</h2>
            </div>
            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="Full name"
                id="name"
                required
              />
              <label htmlFor="name" class="form__label">
                Full name
              </label>
            </div>

            <div class="form__group">
              <input
                type="email"
                class="form__input"
                placeholder="Email address"
                id="email"
                required
              />
              <label htmlFor="email" class="form__label">
                Email address
              </label>
            </div>
            <div class="form__group u-margin-bottom-medium">
              <div class="form__radio-group">
                <input
                  type="radio"
                  class="form__radio-input"
                  id="small"
                  name="size"
                />
                <label htmlFor="small" class="form__radio-label">
                  <span class="form__radio-button"></span>
                  Small tour group
                </label>
              </div>

              <div class="form__radio-group">
                <input
                  type="radio"
                  class="form__radio-input"
                  id="large"
                  name="size"
                />
                <label htmlFor="large" class="form__radio-label">
                  <span class="form__radio-button"></span>
                  Large tour group
                </label>
              </div>
            </div>

            <div class="form__group">
              <button class="btn btn--green">Next step &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
