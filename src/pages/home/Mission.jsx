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
              Our vision is to be a global leader in sustainable development,
              driving impactful change through renewable energy initiatives,
              water conservation projects, and eco-conscious manufacturing,
              creating a world where sustainability is the cornerstone of
              progress.
            </p>
          </div>
          <div className="mission__content">
            <h4 className="mission__title u-margin-bottom-small">Mission</h4>
            <p className="paragraph">
              Our mission is to pioneer sustainable solutions through innovative
              ideas fostering eco-friendly practices for a greener tomorrow.
            </p>
          </div>
        </div>
        <div className="mission__right">
          <div className="mission__img-box">
            <img
              src="/facts8.jpg"
              alt="Mission Image"
              className="mission__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
