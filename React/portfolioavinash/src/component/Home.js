import React from "react";
import { useEffect, useRef } from "react";
import "./Home.css";
import Typed from "typed.js";
import CircularProgressBar from "./circularProgressBar";

export default function Home(props) {
  const el1 = useRef(null);
  const el2 = useRef(null);
  useEffect(() => {
    const typed1 = new Typed(el1.current, {
      strings: [
        "Python Developer",
        "- Django ",
        "- Flask",
        "Full Stack Developer",
        "- HTML CSS",
        "- JavaScript",
        "- React Js",
        "Java Developer",
        "Android Developer",
        "Software Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });
    const typed2 = new Typed(el2.current, {
      strings: [
        "Python Developer",
        "- Django ",
        "- Flask",
        "Full Stack Developer",
        "- HTML CSS",
        "- JavaScript",
        "- React Js",
        "Java Developer",
        "Android Developer",
        "Software Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });
    // Destropying
    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <>
      <div className="HomeBox">
        <div>
          <div className="homeTextBox">
            <div className="homeTitle">
              <span> {props.titleStart}</span> {props.titleEnd}
            </div>
            <div className="homeName">{props.name}</div>
            <div className="homeSkillMain">
              <div className="homeSkill">
                {props.skill}
                <span className="homeskillauto" ref={el1}></span>
              </div>
            </div>
            <div className="homeDetail">{props.detail}</div>
          </div>

          <div className="homeIconBox">
            <div className="homeIcon">
              <iconify-icon icon="ic:baseline-whatsapp"></iconify-icon>
            </div>
            <div className="homeIcon">
              <iconify-icon icon="mdi:linkedin"></iconify-icon>
            </div>
            <div className="homeIcon">
              <iconify-icon icon="mdi:github"></iconify-icon>
            </div>
            <div className="homeIcon">
              <iconify-icon icon="mdi:instagram"></iconify-icon>
            </div>
          </div>

          <div className="btnBox">
            <a className="btnItem" href="\">
              Resume
            </a>
            <a className="btnItem" href="\">
              Visit GitHub
            </a>
            {/* <button ></button> */}
          </div>
        </div>
        <div className="HomeImgBox">
          <img className="HomeImg" src=".//profile-pic.png"></img>
        </div>
      </div>

      <div id="homeProjectsBox">
        <div className="homeProjects container">
          <div className="homeProjectsHeader">
            <hr></hr>

            <h1 className="section-title">
              Project <span>Details</span>
            </h1>
            <hr className="hr"></hr>
          </div>

          <div className="homeProjectsAll ">
            <div className="homeProject-item" id="homeProject-item1">
              <div className="homeProject-info">
                <h1>{props.project1Name}</h1>
                <h2>{props.project1Lan}</h2>
                <p>{props.project1Detail}</p>
              </div>
              <div className="homeProject-img">
                <img src=".//1.jpg" alt="img" />
              </div>
            </div>

            <div className="homeProject-item" id="homeProject-item2">
              <div className="homeProject-info">
                <h1>{props.project2Name}</h1>
                <h2>{props.project2Lan}</h2>
                <p>{props.project2Detail}</p>
              </div>
              <div className="homeProject-img">
                <img src=".//1.jpg" alt="img" />
              </div>
            </div>

            <div className="homeProject-item" id="homeProject-item3">
              <div className="homeProject-info">
                <h1>{props.project3Name}</h1>
                <h2>{props.project3Lan}</h2>
                <p>{props.project3Detail}</p>
              </div>
              <div className="homeProject-img">
                <img src=".//1.jpg" alt="img" />
              </div>
            </div>

            <div className="homeProject-item" id="homeProject-item4">
              <div className="homeProject-info">
                <h1>{props.project4Name}</h1>
                <h2>{props.project4Lan}</h2>
                <p>{props.project4Detail}</p>
              </div>
              <div className="homeProject-img">
                <img src=".//1.jpg" alt="img" />
              </div>
            </div>

            <div className="homeProject-item" id="homeProject-item5">
              <div className="homeProject-info">
                <h1>{props.project5Name}</h1>
                <h2>{props.project5Lan}</h2>
                <p>{props.project5Detail}</p>
              </div>
              <div className="homeProject-img">
                <img src=".//1.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="Barbox">
        <CircularProgressBar></CircularProgressBar>
      </div>

      
      <div className="homeAboutBox">
        <div className="aboutImgBox">
          <img className="aboutImg" src=".//profile-pic.png"></img>
        </div>
        <div className="aboutBox">
          <div className="abouttext">
            {props.aboutStart}
            <span>{props.aboutEnd}</span>
          </div>
          <hr></hr>
          <div className="aboutskill">
            <span className="aboutskillauto" ref={el2}></span>
          </div>
          <div className="aboutdetail">{props.aboutDetail}</div>
          <div className="aboutBtn">
            <a href="/">More About Me</a>
          </div>
        </div>
      </div>
    </>
  );
}
