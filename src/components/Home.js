import React from "react";
import "./Home.css";
function Home() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Georgia, serif",
  };
  return (
    <div className="home">
      <h1 style={mystyle}>MOVIE APP</h1>
      <img></img>
    </div>
  );
}

export default Home;
