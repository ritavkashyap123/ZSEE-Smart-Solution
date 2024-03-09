import React from "react";

const Why = () => {
  return (
    <section className="why-us">
      <div className="why-us__left">
        <img
          src="/Jia_Roing.jpg"
          alt="Why us"
          className="why-us__img"
        />
      </div>
      <div className="why-us__right">
        <h3 className="heading-tertiary u-margin-bottom-small">Why us</h3>
        <h2 className="heading-secondary u-margin-bottom-small">
          Carbon capabilities and journey to net zero
        </h2>
        <p className="paragraph">
          As a progressive business, committed to doing the right thing,
          Galliford Try recognises the urgency of the climate change agenda and
          champions the role we have to play in decarbonising the economy for a
          greener, more sustainable future. As well as driving down our own
          carbon footprint, we work with clients to deliver low and net zero
          projects and work with suppliers and design consultants to help
          everyone in the industry reach their net zero carbon targets.
        </p>
      </div>
    </section>
  );
};

export default Why;
