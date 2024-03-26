import React from "react";

const Who = () => {
  return (
    <section className="who-we-are" id="about-the-company">
      <h3 className="heading-tertiary u-margin-bottom-small"> Who we are</h3>
      <div className="who-we-are__content">
        <div className="who-we-are__left">
          {/* <h2 className="heading-secondary u-margin-bottom-small">
            Who we are
          </h2> */}
          <p className="paragraph">
            ZSEE Smart Solutions is a dynamic and forward-thinking company
            headquartered in India, with a strong presence across five states.
            Our core ethos revolves around sustainability, innovation, and
            environmental stewardship. As a leading provider of holistic
            solutions, we specialise in solar energy projects, water management
            initiatives, automation technologies, and eco-friendly manufacturing
            practices. Our team comprises experts passionate about creating a
            positive impact on the planet, and we are committed to delivering
            solutions that not only meet but exceed the evolving needs of our
            clients. At ZSEE Smart Solutions, we are more than a business – we
            are a catalyst for change, driving towards a greener and more
            sustainable future for generations to come.
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
