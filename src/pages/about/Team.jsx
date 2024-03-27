import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import TeamDetails from "./TeamDetails";

const Team = () => {
  const { team } = TeamDetails();
  return (
    <div className="Team" id="our-team">
      <div style={{ background: "white" }}>
        <h3 className="heading-tertiary u-margin-bottom-small globalheader">
          Company Ensembles
        </h3>
      </div>
      <section className="why-us" >
        <div className="why-us__right">
          {/* <h3 className="heading-tertiary u-margin-bottom-small">What We Do</h3> */}
          <h2 className="heading-secondary u-margin-bottom-small">
            Note From the Boss ✍🏾
          </h2>
          <p className="paragraph">
            We specialise in a range of sustainable services aimed at creating a
            positive impact on the environment and society. Our expertise spans
            solar energy projects, water management solutions, automation
            technologies, and eco-friendly manufacturing practices. In the realm
            of solar energy, we design and implement tailored solar power
            systems for residential, commercial, and industrial applications,
            promoting renewable energy adoption and reducing carbon footprints.
            Our water management solutions focus on efficient water usage,
            conservation, and purification, utilising innovative technologies
            such as rainwater harvesting systems, water treatment plants, and
            smart irrigation techniques. Additionally, we offer advanced
            automation solutions and technology integration services to optimise
            processes and enhance productivity across industries. Our commitment
            to eco-friendly manufacturing practices ensures that we prioritise
            sustainability in production, utilising recyclable materials and
            waste reduction strategies. At ZSEE Smart Solutions, we are
            dedicated to driving sustainable change and contributing to a
            greener, more sustainable future for generations to come.
          </p>
        </div>
        <div className="why-us__left">
          <img src="/ratan_tata.jpg" alt="Boss" className="why-us__img" />
        </div>
      </section>
      <h3 className="heading-tertiary u-margin-bottom-small globalheader">
        The Team
      </h3>
      <div className="team-box">
        <div className="card-wrap">
          {team?.map((team, index) => (
            <div className="card" data-state="#about" key={index}>
              <div className="card-header">
                <div
                  className="card-cover"
                  // style={{
                  //   backgroundImage:
                  //     `url(${team.image})`,
                  // }}
                />
                <img className="card-avatar" src={team.image} alt="avatar" />
                <h1 className="card-fullname">{team.name}</h1>
                <h2 className="card-jobtitle">{team.designation}</h2>
              </div>
              <div className="card-main">
                <div className="card-section is-active" id="about">
                  <div className="card-content">
                    <div className="card-subtitle">ABOUT</div>
                    <p className="card-desc">{team.description}</p>
                  </div>
                  <div className="card-social">
                    <Link to={team.facebook}>
                      <FaFacebookF className="card-icon" />
                    </Link>
                    <Link to={team.instagram}>
                      <FaInstagram className="card-icon" />
                    </Link>
                    <Link to={team.twitter}>
                      <FaTwitter className="card-icon" />
                    </Link>
                    <Link to={team.linkedin}>
                      <FaLinkedinIn className="card-icon" />
                    </Link>
                    <Link to={team.mail}>
                      <FaEnvelope className="card-icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
