import React from "react";
import "./milestone.scss";
import TimelineContent from "./TimelineContent";
import { Link } from "react-router-dom";
// import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiStopwatch } from "react-icons/bi";

const Milestone = () => {
  const { milestones } = TimelineContent();

  const colors = [
    "#FFDBB0",
    "#B6FFB0",
    "#EAB0FF",
    "#B0D9FF",
    "#FFB0B5",
    "#FFF7B0",
  ];

  return (
    <div className="Milestone">
      {/* <img src="/marwa 44.JPG" alt="" className="header-image" /> */}
      <div className="header-text"></div>
      <VerticalTimeline>
        {milestones?.map((card, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              // background: colors[index % colors.length],
              background: "#fff",
              color: "#000",
            }}
            contentArrowStyle={{
              // borderRight: `10px solid ${colors[index % colors.length]}`,
              borderRight: `10px solid #fff`,
            }}
            date={card.year}
            dateClassName="date"
            iconStyle={{
              // background: colors[index % colors.length],
              background: "#B6FFB0",
              color: "#000",
            }}
            icon={<BiStopwatch />}
            key={index}
          >
            <div className="cards">
              <div className="writings">
                <h3 className="vertical-timeline-element-title">
                  {card.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {card.subtitle}
                </h4>
                <p>{card.para}</p>
              </div>
              <div className="image">
                <img src="/facts1.jpg" alt="" />
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Milestone;
