import React from "react";
import "./Experience.css";
import html from "../../images/html.svg";
import react from "../../images/react.svg";
import js from "../../images/js.png";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

export default function Experience() {
  const statements = [
    "1. I am a pretty great SDE",
    "2. I have created various features like  ",
   
  ];

  const iconImages = [react, js, html];

  return (
    <div className="experience_container">
      <p className="experience_title">Experience</p>
      <div className="experience_cards_container">
        <ExperienceCard
          companyName="Google"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
        <ExperienceCard
          companyName="Amazon"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
        <ExperienceCard
          companyName="Apple"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
      </div>
    </div>
  );
}