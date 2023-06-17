import React from "react";

export const Hero = () => {
  return (
    <section className="hero d-flex justify-center center-text fd-column">
      <h2>
        MLS Multiple Listing Service <br /> Listings
      </h2>
      <p>Your Trusted Real Estate Source</p>

      <div className="center-text">
        <button className="search-listing__btn">search listings</button>
      </div>
    </section>
  );
};
