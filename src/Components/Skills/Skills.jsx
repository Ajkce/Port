import React, { useEffect, useRef } from "react";
import "./Skills.scss";
import Html from "../../img/html.svg";
import Css from "../../img/css.svg";
import Js from "../../img/js.svg";
import Sass from "../../img/sass.svg";
import Typescriot from "../../img/typescript.svg";
import Reacticon from "../../img/react.svg";
import Redux from "../../img/redux.svg";
import Node from "../../img/nodejs.svg";
import Npm from "../../img/npm.svg";
import Mongodb from "../../img/mongodb.svg";
import Express from "../../img/express.svg";
import Bootstrap from "../../img/bootstrap.svg";
import Material from "../../img/material.svg";
import Git from "../../img/git.svg";
import Github from "../../img/github.svg";

import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function Skills() {
  gsap.registerPlugin(ScrollTrigger);

  const skill1 = useRef();
  const skill2 = useRef();
  const skill3 = useRef();
  const skill4 = useRef();
  const skill5 = useRef();
  const skill6 = useRef();

  useEffect(() => {
    const to = gsap.timeline({
      scrollTrigger: {
        trigger: skill1.current,
     
      },
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skill4.current,
     
        end: "top 30%",
        
      },
    });

    to.from(
      skill3.current,
      {
        duration: 0.6,
        scaleX: 0.1,
        transformOrigin: "left",
        delay: 0.3,
        repeat: 0,
        opacity: 0,
      },

      []
    )
      .from(
        skill4.current,
        {
          duration: 0.3,
          x: -500,
          delay: 0.7,
          repeat: 0,
          opacity: 0,
        },

        []
      )
      .from(
        skill5.current,
        {
          duration: 0.3,
          x: 500,
          delay: 0.7,
          repeat: 0,
          opacity: 0,
        },

        []
      );

    tl.from(
      ".progress-line",
      {
        duration: 0.1,
        width: "0px",
        delay: 0.1,
        repeat: 0,
        opacity: 0,
      },

      []
    ).from(".tech-icon", {
      duration: 0.8,
     scale: 0,
     delay:1,
     ease: "power1.inOut",
  stagger: {
    from: "start",
    ease: "power3.inOut",
    amount: 2,
  }
    });
  }, []);
  const icons = [
    { id: 1, icon: Html, value: "Html" },
    { id: 2, icon: Css, value: "CSS" },
    { id: 3, icon: Js, value: "Javascript" },
    { id: 4, icon: Sass, value: "SASS" },
    { id: 5, icon: Typescriot, value: "Typescript" },
    { id: 6, icon: Reacticon, value: "React JS" },
    { id: 7, icon: Redux, value: "Redux" },
    { id: 8, icon: Node, value: "Node JS" },
    { id: 9, icon: Express, value: "Express" },
    { id: 10, icon: Npm, value: "NPM" },
    { id: 11, icon: Mongodb, value: "Mongodb" },
    { id: 13, icon: Bootstrap, value: "Bootstrap" },
    { id: 14, icon: Material, value: "Material UI" },
    { id: 15, icon: Git, value: "Git" },
    { id: 16, icon: Github, value: "Github" },
  ];

  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#2453ff",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#2453ff",
      fontSize: 15,
    },
  }));

  const data = [
    { id: 1, label: "HTML/CSS", width: 90 },
    { id: 2, label: "Javascript", width: 80 },
    { id: 3, label: "React", width: 85 },
    { id: 4, label: "Node Js", width: 55 },
  ];

  return (
    <section className="skills-section pb-100" id="skills">
      <div className="wrapper">
        <div className="row align-items-center ">
          <div className="section-title column align-items-center  ">
            <h5 className="sub-title " ref={skill1}>
              Skills
            </h5>
            <h5 className="main-title" ref={skill2}>
              What I Kow
            </h5>
            <ul className="line" ref={skill3}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="skill-content" ref={skill4}>
            <div className="section-title">
              <h3 className="sub-title-white">Profeciency</h3>
            </div>

            <div className="about-skills">
              {data.map((item) => {
                return (
                  
                    <div className="skill-item" key={item.id}>
                      <div className="skill-header">
                        <div className="skill-title">{item.label}</div>
                        <div className="skill-percentage">
                          <p>
                            <span className="counter">{item.width}</span>%
                          </p>
                        </div>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-inner">
                          <div
                            className="bar progress-line"
                            style={{ width: `${item.width}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                 
                );
              })}
            </div>
          </div>
          <div className="skill-img" ref={skill5}>
            <div className="section-title">
              <h3 className="sub-title-white">Tools & Technologies:</h3>
            </div>
            <div className="row icons-row">
              {icons.map((item) => {
                return (
                  
                    <BootstrapTooltip
                      title={item.value}
                      className="tooltip"
                      
                      key={item.id}
                     
                    >
                      <div
                      ref={skill6}
                     
                        className="icon icon-lg icon-shape shadow rounded-circle mb-5 tech-icon"
                        id="html-5"
                      >
                        <svg>
                          <image href={item.icon}></image>
                        </svg>
                      </div>
                    </BootstrapTooltip>
                  
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
