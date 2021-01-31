import React from "react";
import "./About.css";
import Shake from "react-reveal/Shake";
import Pulse from "react-reveal/Pulse";
import Handshake from "../../img/handshake.png";
import irvine from "../../img/irvine.svg";
import keio from "../../img/keio.svg";
import masterclass from "../../img/masterclass.svg";
import autralia from "../../img/australia.svg";
import hopkins from "../../img/hopkins.svg";
// import iowa from "../../img/iowa.svg";
// import royal from "../../img/royal.svg";
// import oregon from "../../img/oregon.svg";

export default function About() {
  return (
    <div className="about_container">
      <section className="about">
        <h1 className="title">About</h1>
        <Pulse>
          <p className="aboutus">
            We as an organization, always strive for the best way to learn and
            develop new skills. To build our courses, we based them on modern
            studies from the best companies out there.
          </p>
        </Pulse>

        <Shake>
          <img src={Handshake} alt="" className="handshake" />
        </Shake>
      </section>
      <section className="partners_container">
        <h1 className="partners">Our partners</h1>
      </section>
      <div className="logo--container">
        <img src={irvine} className="uni--logo" alt="" />
        <img src={keio} alt="" className="uni--logo" />
        <img src={masterclass} alt="" className="uni--logo" />
        <img src={autralia} className="uni--logo" alt="" />
        <img src={hopkins} alt="" className="uni--logo" />
        {/* <img src={iowa} alt="" className="uni--logo" />
        <img src={royal} alt="" className="uni--logo" />
        <img src={oregon} alt="" className="uni--logo" /> */}
      </div>
    </div>
  );
}
