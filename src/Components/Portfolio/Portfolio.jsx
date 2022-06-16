import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { convertLength } from "@mui/material/styles/cssUtils";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Githubuser from "../../img/Github.PNG";
import Backroad from "../../img/Backroad.PNG";
import Comfy from "../../img/Comfy.PNG";
import Jobster from "../../img/Jobster.PNG";

function Portfolio() {
  gsap.registerPlugin(ScrollTrigger);
 
  const items = [
    {
      Id: 1,
      title: "Search Github-Users",
      type: "react",
      img: Githubuser,
      desc: "A github users search application project where data is fetched using github api. It displays the searched users github account details in an interactive chart format",
      tools: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Styled Components",
        },
        {
          id: 3,
          name: "Auth 0",
        },
      ],
      github: "https://github.com/Ajkce/Github-users",
      website: "https://ajaya-projects-github-users.netlify.app/",
    },
    {
      Id: 2,
      title: "jobster",
      type: "react",
      img: Jobster,
      desc: "A react-redux project which helps users to keep track of the job applications progress. It involves all the crud application like create, read, update and delete operations.",
      tools: [
        {
          id: 1,
          name: "React-redux",
        },
        {
          id: 2,
          name: "Axios",
        },
        {
          id: 3,
          name: "Styled Components",
        },
      ],
      github: "https://github.com/Ajkce/Jobster",
      website: "https://react-jobster.netlify.app",
    },
    {
      Id: 3,
      title: "Comfy",
      type: "javascript",
      img: Comfy,
      desc: "A sample ecommerce project created using vanilla js. It utilises javascript array funcation to search, filter, sort and select the products based on specific properties.",
      tools: [
        {
          id: 1,
          name: "HTML",
        },
        {
          id: 2,
          name: "CSS",
        },
        {
          id: 3,
          name: "Javascript",
        },
      ],
      github: "https://github.com/Ajkce/Comfy",
      website: "https://comfy-ajaya.netlify.app",
    },
    {
      Id: 4,
      title: "Tours-project",
      type: "javascript",
      img: Backroad,
      desc: "A vanilla Js tours webpage created using HTML, CSS and Javascript",
      tools: [
        {
          id: 1,
          name: "HTML",
        },
        {
          id: 2,
          name: "CSS",
        },
        {
          id: 3,
          name: "Javascript",
        },
      ],
      github: "https://github.com/Ajkce/tours",
      website: "https://vanilla-js-backroad-project.netlify.app",
    },
  ];

  const buttons = [
    {
      id: 1,
      value: "all",
    },
    {
      id: 2,
      value: "javascript",
    },
    {
      id: 3,
      value: "react",
    },
    {
      id: 4,
      value: "node",
    },
  ];
  const port1 = useRef();
  const port2 = useRef();
  const port3 = useRef();

  useEffect(() => {
    const to = gsap.timeline({
      scrollTrigger: {
        trigger: port1.current,
        opacity: 1,
      },
    });

    to.from(
      port2.current,

      {
        duration: 0.6,
        scaleX: 0.1,
        transformOrigin: "left",
        delay: 0.3,
        repeat: 0,
        opacity: 0,
      },

      []
    ).fromTo(
      ".portfolio-item",
      { opacity: 0, y: 200 },
      {
        duration: 0.5,
        y: 0,
        delay: 0.4,
        stagger: 0.3,
        opacity: 1,
      },

      []
    );
  }, []);

  const [data, setData] = useState(items);
  const [modelItem, setModelItem] = useState([]);
  const element = useRef(null);
  const [openbox, setOpenbox] = useState(false);
  const [number, setNumber] = useState(0);
  const [active, setActive] = useState(1);
  const togglelightbox = () => {
    setOpenbox(!openbox);
    setNumber(0);
  };
  const Openmodel = (e) => {
    e.preventDefault();
    const itemid = parseInt(e.target.value);
    const data = items.filter((item) => item.Id === itemid);
    console.log(data);
    setModelItem(data);
    togglelightbox();
    setNumber(itemid);
  };

  const handleClick = (e) => {
    setActive(e.target.id);
    console.log(active);
  };

  const nextItem = (id) => {
    if (number < items.length - 1) {
      setNumber(number + 1);
    } else {
      setNumber(0);
    }
    const item = [items[number]];
    console.log(number);

    setModelItem(item);
  };
  const prevItem = (id) => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(items.length - 1);
    }
    const item = [items[number]];
    console.log(number);

    setModelItem(item);
  };

  const setItems = (e) => {
    
    e.preventDefault();
    const type = e.currentTarget.value;
    

    const newItem = items.filter((item) => {
      if (item.type === type) {
        
        return item;
      } else if(type === 'all'){
        return items;
      }
      return false;
      
    });
    setData(newItem);
    console.log(newItem);
    handleClick(e);
  };

  return (
    <section className="portfolio-section pt-100" id="portfolio">
      <div className="wrapper">
        <div className="row align-items-center ">
          <div
            className="section-title column align-items-center  "
            ref={port1}
          >
            <h5 className="sub-title ">Portfolio</h5>
            <h3 className="main-title-dark">My Latest Work</h3>
            <ul className="line" ref={port2}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-filter">
            {buttons.map((btn) => {
              return (
              
                  <button
                    type="button"
                    key={btn.id}
                    className={active === btn.id ? "active" : ""}
                    id={btn.id}
                    value={btn.value}
                    onClick={setItems}
                  >
                    {btn.value}
                  </button>
               
              );
            })}
          </div>
        </div>
        <div className="row">
          {data.map((item) => {
        
            return (
              
                <div className="portfolio-item" key={item.Id} ref={port3}>
                  <div className="portfolio-item-inner">
                    <div className="portfolio-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="info">
                      <h4>{item.title}</h4>
                    </div>
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <h3>React / Auth 0 / Stripe</h3>
                      <div className="button">
                        <button
                          className="btn btn-yellow"
                          value={item.Id}
                          onClick={Openmodel}
                        >
                          More Info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              
            );
          })}
          {modelItem.map((item) => {
            console.log(item);
            return (
           
                <div ref={element} key={item.id} className={`lightbox ${openbox && "open"} `}>
                  <div className="lightbox-content">
                    <div className="lightbox-close" onClick={togglelightbox}>
                      &times;
                    </div>
                    <img
                      src={item.img}
                      onClick="nextItem()"
                      className="lightbox-img"
                      alt=""
                    ></img>
                    <div className="lightbox-caption">
                      <div className="caption-text"></div>
                      <div className="caption-counter"></div>
                    </div>
                    <div className="lightbox-info">
                      <div className="title">
                        <h2>{item.title}</h2>
                        <ul className="line">
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                      <div className="desc">{item.desc}</div>
                      <div>
                        {item.tools.map((tool) => {
                          return (
                            <button key={tool.id} className="btn">
                              {tool.name}
                            </button>
                          );
                        })}
                      </div>

                      <div className="links">
                        <a href={item.github}>
                          <button className="github-btn">
                            <GitHubIcon className="github"></GitHubIcon>
                          </button>
                        </a>
                        <a href={item.website}>
                          <button className="website-btn">
                            <LinkIcon className="website"></LinkIcon>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="lightbox-controls">
                    <div
                      className="prev-item"
                      value={item.Id}
                      onClick={prevItem}
                    >
                      <ArrowBackIosNewIcon className="micon" />
                    </div>
                    <div
                      className="next-item"
                      item-id={item.Id}
                      value={item.Id}
                      onClick={() => nextItem(item.Id)}
                    >
                      <ArrowForwardIosIcon className="micon" value={item.Id} />
                    </div>
                  </div>
                </div>
             
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
