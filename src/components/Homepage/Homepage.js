import React from "react";
import "./Homepage.css";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";



function Homepage() {
    return (
      <div className="homepage_container">
        <div className="homepage_left">
          <p className="homepage_left_h1">
            <span className="red_color">Hi,</span> my name is
          </p>
          <p className="homepage_left_h2">Niharika Sharma</p>
          <p className="homepage_left_h3">
            Learning Full Stack Development at <span className="red_color">Lovely Professional University.</span>{" "}
          </p>
          <p className="homepage_left_description">
            I am a Third Year Undergrad..
            {" "}
          </p>
          <div>
            <a href="https://github.com/Niharikasharma707" target="_blank">
              <img src={github} alt="githubimage" className="homepage_logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/niharika-sharma-a364261b7/" target="blank">
              <img src={linkedin} alt="linkedinimage" className="homepage_logo" />
            </a>
          </div>
          <a href="mailto:niharikasharma9640@gmail.com">
            <button className="homepage_left_button">Get in Touch</button>
          </a>
        </div>
        <div className="homepage_right">
          <img
         
            src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
            alt="GIF"
          />
        </div>
      </div>
    );
  }
  
  export default Homepage