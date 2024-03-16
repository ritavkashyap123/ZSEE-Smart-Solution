import React from "react";
import "./contact.scss";

import { FaAngleDown } from "react-icons/fa";
import Map from "../../components/map/Map";

const Contact = () => {
  return (
    <div className="Contact">
      {/* <img
        src="/marwa 44.JPG"
        alt=""
        className="header-image"
      /> */}
      <div className="header-text"></div>{" "}
      <div className="contact-us">
        <div className="container">
          <div className="left">
            <div className="inner-content-box">
              <h2 className="heading-secondary u-margin-bottom-small">
                Let's Talk
              </h2>
              <p className="paragraph u-margin-bottom-mid">
                We've found that we deliver the greatest value to our clients
                when we establish ongoing relationships that allow us to
                materially contribute to their long-term success.
              </p>
            </div>
            <div className="inner-content-box">
              <h3 className="title u-margin-bottom-small">
                <span className="icon-box">
                  <FaAngleDown />
                </span>
                Visit us personally
              </h3>
              <p className="paragraph u-margin-bottom-small">
                Beside Atta Quarshie Merton Memorial Hospital Ave 2nd Floor,
                Kaneshie, Accra.
              </p>

              <div className="img-box">
                <Map />
              </div>
            </div>
          </div>

          <div className="right">
            <form
              action="mailto:ritavkashyap123@gmail.com"
              method="GET"
              className="form form"
            >
              <div className="col col--1 u-margin-bottom-small">
                <div className="group">
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    className="input"
                    type="name"
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

              <button className="btn btn--green">Send us a message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
