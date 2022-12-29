import React from "react";
import "./about.css";
import Me from "../../assets/sari1.jpg";
import { CgAwards } from "react-icons/cg";
import { VscFolder } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <CgAwards className="about__icon" />
              <h5>Experince</h5>
              <small>6 month internship</small>
            </article>
            <article className="about__card">
              <VscFolder className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            amet! Rem nobis quas quos maiores et voluptas ducimus architecto
            distinctio aperiam commodi cupiditate molestiae sint ad eligendi,
            illum deserunt saepe?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
