import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { convertLength } from "@mui/material/styles/cssUtils";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function Portfolio() {
  gsap.registerPlugin(ScrollTrigger);
  const items = [
    {
      Id: 1,
      title: "e-commerce",
      type: "all",
      img: "https://miro.medium.com/max/1014/1*Fgm5OdUWiLrSK8-aakUb3A.jpeg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa ducimus officiis quia reprehenderit! Iure minus perferendis sed perspiciatis magni!",
      tools: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Sass",
        },
        {
          id: 3,
          name: "Auth 0",
        },
      ],
      github: "www.gdg.com",
      website: "www.dgd.com",
    },
    {
      Id: 2,
      title: "e-commerce",
      type: "javascript",
      img: "https://www.sam-solutions.com/blog/wp-content/uploads/2020/05/Mobile-ecommerce-SMM.png",
    },
    {
      Id: 3,
      title: "e-commerce",
      type: "react",
      img: "https://buildfire.com/wp-content/uploads/2019/12/Ecommerce-mobile-app-scaled-1200x900.png",
    },
    {
      Id: 4,
      title: "e-commerce",
      type: "react",
      img: "https://mindster.com/wp-content/themes/mindster/img/ecommerce-banner.png",
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
      {opacity: 0,
        y: 200,},
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
    const data = items.filter((item) => item.Id == itemid);
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
      }
    });
    setData(newItem);
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
                <>
                  <button
                    type="button"
                    key={btn.id}
                    className={active == btn.id ? "active" : ""}
                    id={btn.id}
                    value={btn.value}
                    onClick={setItems}
                  >
                    {btn.value}
                  </button>
                </>
              );
            })}
          </div>
        </div>
        <div className="row">
          {data.map((item) => {
            return (
              <>
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
              </>
            );
          })}
          {modelItem.map((item) => {
            return (
              <>
                <div ref={element} className={`lightbox ${openbox && "open"} `}>
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
                        <h2>Ecommerce</h2>
                        <ul className="line">
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                      <div className="desc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repellat, molestiae. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Corrupti, vel.
                      </div>
                      <div>
                        <button className="btn">React</button>
                        <button className="btn">React</button>
                        <button className="btn">React</button>
                      </div>

                      <div className="links">
                        <button className="github-btn">
                          <GitHubIcon className="github"></GitHubIcon>
                        </button>
                        <button className="website-btn">
                          <LinkIcon className="website"></LinkIcon>
                        </button>
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
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
