import React from "react";
import Slide from "react-reveal/Slide";
import People from "../../img/people.png";
import Teaching from "../../img/teaching.png";
import Education from "../../img/education.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home_container">
      <section className="home">
        <Slide left>
          <p className="text">
            We observe, analyze, collect and systematically organise information
            so you can learn, understand and achieve more in your career
          </p>
        </Slide>
        <Slide right>
          <img src={People} alt="logo" className="img--container" />
        </Slide>
      </section>

      <section className="home">
        <Slide left>
          <p className="text">
            We explain concepts and develop thought patterns used in
            problemsolving and life accomplishments
          </p>
        </Slide>
        <Slide right>
          <img src={Teaching} alt="logo" className="img--container" />
        </Slide>
      </section>
      <section className="home">
        <Slide left>
          <p className="text">
            No GED necessary. Education and knowledge is for everyone. With
            routines and dicipline you can do anything. Access our course on any
            device.
          </p>
        </Slide>
        <Slide right>
          <img src={Education} alt="logo" className="img--container" />
        </Slide>
      </section>
    </div>
  );
}
