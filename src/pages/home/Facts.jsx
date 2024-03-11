import React from "react";
import "./home.scss";
import HomeContent from "./HomeContent";

const Facts = () => {
  const { facts } = HomeContent();

  return (
    <div className="Facts">
      <main class="page-content">
        {facts.map((fact, index) => (
          <div class="card" key={index}>
            <div class="content">
              <h2 class="title">{fact.title}</h2>
              <p class="copy">{fact.copy}</p>
              {/* <button class="btn">View Trips</button> */}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Facts;
