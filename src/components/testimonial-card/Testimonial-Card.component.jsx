import React from "react";
function TestimonialCard({ logo, heading, explain, extraClass }) {
  return (
    <div className={`.test-card__container ${extraClass}`}>
      <img src={logo} />
      <br />
      <h2>{heading}</h2>
      <div className="p-holder">
        <p>{explain}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
