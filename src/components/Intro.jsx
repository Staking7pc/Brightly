import React from "react";
import "../css/Intro.css";

class Intro extends React.Component {
  render() {
    return (
      <div className = "Intro">
        <div>
        <h1 className="Intro-title">
            Staking Service Providers 
        </h1>               
            <p>We are a fast-growing validators with the passion for quality</p>
            <p>Round the clock monitoring</p>
            <p>Easily approchable</p>
            <p>Multiple channels of alerting</p>
            <p>Over 25 years of experience</p>
            <button className='button'>Sample </button>
        </div>
      </div>
    );
  }
}

export default Intro;
