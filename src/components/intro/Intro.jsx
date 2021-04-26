import "./intro.scss";
// import { init } from "ityped";
// import { useEffect, useRef } from "react";

export default function Intro() {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ["App development", "Web Development", "Cloud Services"],
  //   });
  // }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/discuss.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, We'are <span>Professional </span></h2>
          <h1> <span>Webify</span> infotech.</h1>
          <h5>
            App Development | Web Development | Game Development | Cloud Service
          </h5>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
