import { useState } from "react";
import "./works.scss";
import A from '../../assets/presentation.png'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc:
        "With 20+ years of experience in website development, we deliver conversion ready websites. Get in touch with us to get your conversion & marketing ready website that brings sales. . ",
      img:
        "https://images.app.goo.gl/Km1NXhGrPXKj1KYG8",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "We help you find the right partners for all your digital needs within your budget. App Development",
        img:
        "https://images.app.goo.gl/Km1NXhGrPXKj1KYG8",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Cloud",
      desc:
        "Empower your teams. Take your project management skills to the next level. Concept to launch in record time",
      img:
        "https://images.app.goo.gl/Km1NXhGrPXKj1KYG8",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={A}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
