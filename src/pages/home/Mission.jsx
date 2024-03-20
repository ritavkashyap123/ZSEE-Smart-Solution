import "./home.scss";

const Mission = () => {
  return (
    <section className="mission">
      <h3 className="heading-tertiary u-margin-bottom-small">Our Mission</h3>
      <div className="mission__container">
        <div className="mission__content-box mission__left">
          <div className="mission__content">
            <h4 className="mission__title u-margin-bottom-small">Vision</h4>
            <p className="paragraph">
              Our Vision is to be one of the prestigious Building Construction
              organizations providing lasting edifice for our clients all over
              Africa, with world-class technology at a competitive cost.
            </p>
          </div>
          <div className="mission__content">
            <h4 className="mission__title u-margin-bottom-small">Mission</h4>
            <p className="paragraph">
              Our Vision is to be one of the prestigious Building Construction
              organizations providing lasting edifice for our clients all over
              Africa, with world-class technology at a competitive cost.
            </p>
          </div>
        </div>
        <div className="mission__right">
          <div className="mission__img-box">
            <img src="/facts8.jpg" alt="Mission Image" className="mission__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
