import React from "react";

const Who = () => {
  return (
    <section className="who-we-are">
      <h3 className="heading-tertiary u-margin-bottom-small">Builco</h3>
      <div className="who-we-are__content">
        <div className="who-we-are__left">
          <h2 className="heading-secondary u-margin-bottom-small">
            Who we are
          </h2>
          <p className="paragraph">
            We are a well established construction company with over 20 years
            experience. Specialising in the public and private sector, We strive
            to form close working relationships with clients and industry
            professionals to provide a full service that reflects attention to
            detail and quality, put simply we build solutions together.
          </p>
        </div>
        <div className="who-we-are__right">
          <p className="who-we-are__paragraph paragraph">
            <span className="emphasis">20</span>
            Kw of Solar Panel installed till date
          </p>
          <p className="who-we-are__paragraph paragraph">
            <span className="emphasis">40+</span>
            Km of pipeline laid till date
          </p>
          <p className="who-we-are__paragraph paragraph">
            <span className="emphasis">20.2 p</span>
            No of houses which got water supply
          </p>
          <p className="who-we-are__paragraph paragraph">
            <span className="emphasis">GHc1m</span>
            Reduction in carbon footprint
          </p>
        </div>
      </div>
    </section>
  );
};

export default Who;
