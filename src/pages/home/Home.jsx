import React from "react";
import "./home.scss";
import Hero from "./Hero";
import ServiceSection from "./HomeProject";
import ImpactSection from "./HomeService";
import Mission from "./Mission";
import Facts from "./Facts";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      {/* <h3 className="heading-tertiary u-margin-bottom-small" style={{margin: "8rem"}}>Our Services</h3>
      <div className="subheader u-margin-bottom-small">
        Top services offered by ZSEE Smart Solutions India
      </div> */}
      <ImpactSection />

      {/* <div className="btn-div">
        <button>
          All Services 
        </button>
      </div> */}
      {/* <div className="header u-margin-top-mid u-margin-bottom-small">
        Mission and Vision
      </div> */}
      <h3
        className="heading-tertiary u-margin-bottom-small"
        style={{ margin: "8rem" }}
      >
        Facts
      </h3>
      <Facts />
      <Mission />
      {/* <div className="btn-div">
        <button>
        All Projects 
        </button>
      </div> */}
            <h3
        className="heading-tertiary u-margin-bottom-small"
        style={{ margin: "8rem" }}
      >
        News and Updates
      </h3>
      <ServiceSection />
    </div>
  );
};

export default Home;
