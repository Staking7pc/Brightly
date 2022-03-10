import React from "react";
import "../css/Cards.css";

class Cards extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title">Supported projects</h2>
        <div className="column">
          <div className="card">
            <h3 className="title">Axelar</h3>
            <image className="logo"></image>
            <div className="description"></div>
            <button className="button"></button>
            <button className="button"></button>
          </div>
                </div>
      </div>
    );
  }
}

export default Cards;
