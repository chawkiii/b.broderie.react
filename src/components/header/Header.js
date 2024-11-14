import React from "react";
import welcome from "../../assets/header/welcome.png";

function Header() {
  return (
    <header>
      <h1 className="home_header">
        <img src={welcome} alt="welcomme " />
        to
        <br />
        B.broderie & confection
      </h1>
    </header>
  );
}

export default Header;
