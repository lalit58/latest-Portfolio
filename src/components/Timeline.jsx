import React from "react";
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.experience.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.date}
            index={index}
            key={item.title}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, type, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <p>{text}</p>
    <div>
      <h2>{heading}</h2>
      <h4>({type})</h4>
    </div>
  </div>
);

export default Timeline;
