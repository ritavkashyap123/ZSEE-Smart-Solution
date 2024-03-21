import React from "react";
import "./contact.scss";
import ContactContent from "./ContactContent";

import { FaAngleDown } from "react-icons/fa";
import Map from "../../components/map/Map";
import { Link } from "react-router-dom";
import { FaLocationDot, FaPhoneFlip, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  const { location } = ContactContent();

  return (
    <div className="Contact">
      <div className="header-text"></div>
      <div className="contact-us">
        <div className="container">
          <div className="left">
            {/* <div className="inner-content-box">
              <h2 className="heading-secondary u-margin-bottom-small">
                Let's Talk
              </h2>
              <p className="paragraph u-margin-bottom-mid">
                We've found that we deliver the greatest value to our clients
                when we establish ongoing relationships that allow us to
                materially contribute to their long-term success.
              </p>
            </div> */}
            {location?.map((loc, index) => (
              <div className="inner-content-box" key={index}>
                <h3 className="title">{loc.title}</h3>
                <Link className="contact-link">
                  <p className="paragraph">📍 {loc.address}</p>
                </Link>
                <Link className="contact-link" to={`tel:${loc.phono}`}>
                  <p className="paragraph">📞 {loc.phono}</p>
                </Link>
                <Link className="contact-link u-margin-bottom-small" to={`mailto:${loc.email}`}>
                  <p className="paragraph">📧 {loc.email}</p>
                </Link>

                {/*           <div className="img-box">
                <Map />
              </div> */}
              </div>
            ))}
          </div>

          <div className="right">
            <form
              action="mailto:ritavkashyap123@gmail.com"
              method="post"
              className="form form"
            >
              <div className="col col--1 u-margin-bottom-small">
                <div className="group">
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="contact-email" className="label">
                    Email
                  </label>
                  <input
                    className="input"
                    type="email"
                    name="contact-email"
                    id="contact-email"
                    placeholder="abc@example.com"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>

              <div className="col col--2 u-margin-bottom-mid">
                <div className="group">
                  <label htmlFor="subject" className="label">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="subject"
                    id="subject"
                    className="input"
                    required
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="col col--2 u-margin-bottom-mid">
                <div className="group">
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="textarea"
                    required
                    placeholder="Say Something..."
                  ></textarea>
                </div>
              </div>

              <button className="btn btn--green" type="submit" value="send">Send us a message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
