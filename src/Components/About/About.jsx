import React, { useEffect, useRef } from "react";
import image from "../../img/about.jpg";
import "./About.scss";
import DownloadIcon from "@mui/icons-material/Download";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function About() {
  gsap.registerPlugin(ScrollTrigger);

  const photo = useRef();
  const info = useRef();
  useEffect(() => {
    const animation1 = gsap.from(photo.current, {
      scrollTrigger: {
        trigger: photo.current,
        start: "top 70%",
      },
      duration: 0.5,
      x: 600,
      delay: 0.3,
      repeat: 0,
      opacity: 0,
    });

    const animation2 = gsap.from(info.current, {
      scrollTrigger: {
        trigger: info.current,
        start: "top 70%",
      },
      duration: 0.5,
      x: -600,
      delay: 0.3,
      repeat: 0,
      opacity: 0,
    });

    return () => {
      animation1.scrollTrigger.kill();
      animation2.scrollTrigger.kill();
    };
  }, []);

  return (
    <section className="about-section " id="about">
      <div className="wrapper">
        <div className="row ">
          <div className="about-img" ref={photo}>
            <div className="img-box">
              <img src={image} alt="" />
              <div className="about-shape"></div>
            </div>
          </div>
          <div className="about-content" ref={info}>
            <div className="section-title">
              <h5 className="sub-title">About</h5>
              <h3 className="main-title">Why Hire Me ?</h3>
              <ul className="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <p>
              I am a frontend developer from canberra Australia.I develop hignly
              interactive front end web application using popular languages and
              framework like javascript, react js and node js. I love using
              modern technology to create exceptional user experiences, and
              always strive to create high quality products.  I have recently
              completed bachelors of information technology major on web design
              and development and currently seeking for opportunities to bring
              my ideas and skills that i have gained to use. 
            </p>

            <button className="btn btn-yellow slidebtn downloadbtn">
              Download CV <DownloadIcon className="download" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
