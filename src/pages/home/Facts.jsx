import React from "react";
import "./home.scss";
import HomeContent from "./HomeContent";

const Facts = () => {
  const { facts } = HomeContent();

  return (
    <div className="Facts">
      <main className="page-content">
        {facts.map((fact, index) => (
          <div className="card" key={index}>
            <div className="content">
              <h2 className="title">{fact.title}</h2>
              <p className="copy">{fact.copy}</p>
              {/* <button class="btn">View Trips</button> */}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Facts;
