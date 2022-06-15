import React, { useRef, useEffect } from "react";
import "./Contact.scss";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function Contact() {
  gsap.registerPlugin(ScrollTrigger);
  const con1 = useRef()
 

  useEffect(() => {
    const to = gsap.timeline({
      scrollTrigger: {
        trigger: con1.current,
     
      },
    });
   

    to.from(
      con1.current,
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
      .from(".card-wrapper",
        
        {
          duration: 0.3,
          y: 200,
          delay: 0.7,
          repeat: 0,
          opacity: 0,
          stagger: 0.2,
        },

        []
      )
      .from(
        ".contact-form",
        {
          duration: 0.3,
          y: 200,
          delay: 1,
          repeat: 0,
          opacity: 0,
        },

        []
      );

   
  }, []);



  return (
    <section className="contact-section" id="contact">
      <div className="wrapper">
        <div className="row align-items-center">
          <div className="section-title column align-items-center">
            <h5 className="sub-title ">Contact</h5>
            <h3 className="main-title-dark">Get In Touch</h3>
            <ul className="line row align-items-center" ref={con1}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="row contact-info">
        <div className="card-wrapper">
          <div className="card">
            <CallIcon className="icon" />
            <span className="phone-text">Phone</span>
            <p className="phone-number">0452059032</p>
          </div>
          </div>
          <div className="card-wrapper">
            
            
          <div className="card">
            <EmailIcon className="icon" />
            <span className="phone-text">Email</span>
            <p className="phone-number">kshettryajaya@gmail.com</p>
          </div>
          </div>
          <div className="card-wrapper">
            
            
          <div className="card">
            <LocationOnIcon className="icon" />
            <span className="phone-text">Adress</span>
            <p className="phone-number">Canberra Act</p>
          </div>
          </div>
        </div>

        {/* COntact Form */}
        <div className="row">
          <div className="contact-form">
            <form action="">
              <div className="row">
                <div className="w-50">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Name"
                      className="input-control"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="input-control"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="input-control"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="w-50">
                  <div className="input-group">
                    <textarea
                      name=""
                      className="input-control"
                      placeholder="Message"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="submit-btn">
                  <button type="submit" className="btn green-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
