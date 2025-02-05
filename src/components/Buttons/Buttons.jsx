import React from "react";
import "./Buttons.css";

const Buttons = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="btnContainer">
        <button className="btn1" onClick={() => scrollToSection("works")}>
          my works
        </button>
        <button className="btn2" onClick={() => scrollToSection("skills")}>
          skills
        </button>
      </div>
    </>
  );
};

export default Buttons;








