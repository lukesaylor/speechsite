import React from "react";
import "./Navbar.css";
import Button from "./NavButton";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">MidAtlanticSpeech.com</div>
      <div className="ButtonsContainer">
        <Button>Home</Button>
        <Button>Resources</Button>
        <Button>Find Therapy</Button>
        <Button>About</Button>
      </div>
    </div>
  );
}

export default Navbar;
