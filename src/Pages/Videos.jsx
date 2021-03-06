import React from "react";
import videosMock from "../../videosMock.json";

import Accordion from "../Accordion/Accordion.jsx";

const Videos = () => (
  <section className="videos">
    <h1>Video Lists</h1>
    {videosMock.map(v => (
      <Accordion key={v.title} title={v.title}>
        <p>{v.synopsis}</p>
      </Accordion>
    ))}
  </section>
);

export default Videos;
