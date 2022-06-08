import React, { useEffect, useState, useRef } from "react";
import "animate.css";
import "./Home.scss";
import Coding from "../../img/coding.json";
import Lottie from "react-lottie";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Letter from "../AnimatedLetters/Letter.jsx";
import { gsap } from "gsap";
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [letterClass, setLetterClass] = useState("text-animate");
  const hello = ["H", "e", "l", "l", "o", ","];
  const myname = ["M", "y", " ", "N", "a", "m", "e", , " ", "i", "s", " "];
  const name = ["A", "J", "A", "Y", "A", " ", "K", " ", "C"];
  const job = [
    "F",
    "r",
    "o",
    "n",
    "t",
    "e",
    "n",
    "d",
    "W",
    "e",
    "b",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  const boxref = useRef();
  const socail1 = useRef();
  const socail2 = useRef();

  const socail3 = useRef();
  const socail4 = useRef();
  const socail5 = useRef();
  const info1 = useRef();
  const info2 = useRef();
  const info3 = useRef();
  const lottie = useRef();

  useEffect(() => {
    const animation1 = gsap.from(boxref.current, {
      duration: 0.4,
      scale: 0.3,
      repeat: 0,
      delay: 3,
      opacity: 0,
    });
    const box = [
      socail1.current,
      socail2.current,
      socail3.current,
      socail4.current,
      socail5.current,
    ];
    const info = [info1.current, info2.current, info3.current];

    const animation2 = gsap.from(box, {
      duration: 0.3,
      x: -100,
      repeat: 0,
      delay: 3.3,
      stagger: 0.12,
      opacity: 0,
    });

    const animation3 = gsap.from(info, {
      duration: 0.3,
      y: -50,
      repeat: 0,
      delay: 2,
      stagger: 0.12,
      opacity: 0,
    });
    const animation4 = gsap.from(lottie.current, {
      duration: 0.5,
      x: 200,
      repeat: 0,
      delay: 2,
      opacity: 0,
    });

    return setTimeout(() => {
      animation1.kill();
      animation2.kill();
      animation3.kill();
      animation4.kill();
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  });
  return (
    <div className="home-section " id="home">
      <ul className="header-social" ref={boxref}>
        <li ref={socail1}>
          <a href="#" className="rounded-circle github-link">
            {" "}
            <GitHubIcon className="github" />
          </a>
        </li>
        <li ref={socail2}>
          <a href="#" className="rounded-circle linkedIn-link">
            {" "}
            <LinkedInIcon className="linkedIn" />
          </a>
        </li>
        <li ref={socail3}>
          <a href="#" className="rounded-circle facebook-link">
            {" "}
            <FacebookIcon className="facebook" />
          </a>
        </li>
        <li ref={socail4}>
          <a href="#" className="rounded-circle twitter-link">
            {" "}
            <TwitterIcon className="twitter" />
          </a>
        </li>
        <li ref={socail5}>
          <a href="#" className="rounded-circle youtube-link">
            {" "}
            <YouTubeIcon className="youtube " />
          </a>
        </li>
      </ul>

      <div className="wrapper">
        <div className="row align-items-center">
          <div className="home-text">
            <h3 className="hello">
              <Letter letterClass={letterClass} strArray={hello} idx={1} />
            </h3>
            <h3 className="name">
              <Letter
                letterClass={`${letterClass} `}
                strArray={myname}
                idx={7}
              ></Letter>
              <span className="fullname">
                <Letter
                  letterClass={`${letterClass} `}
                  strArray={name}
                  idx={18}
                ></Letter>
              </span>
            </h3>
            <h4 ref={info1} className="profession">
              Frontend Web Developer
            </h4>
            <p ref={info2}>
              Passionate Web Developer with an Expertise of Building Web
              Applications Using Javascript and React JS Including Some Other
              Cool Libraries and Frameworks
            </p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <span ref={info3} href="" className="btn btn-yellow slidebtn  ">
                Contact Me
              </span>
            </Link>
          </div>
          <div className="home-image" ref={lottie}>
            <Lottie options={defaultOptions} height={500} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
