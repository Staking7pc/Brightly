import React from "react";
import Fade from "react-reveal";
import "../css/Welcome.css";
import telegram from "../images/telegram.png";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";

class Welcome extends React.Component {
  render() {
    return (
      <div className = "Welcome">
        <h1 className="welcome-title">
          <Fade left cascade>
            Welcome to Brigthlystake
          </Fade>
        </h1>
        <div className="socials">
          <a
            href="https://t.me/Brightlystake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socials-logo"
              src={telegram}
              alt="Brightlystake telegram"
            />
          </a>
          <a
            href="https://twitter.com/brightlystake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socials-logo"
              src={twitter}
              alt="Brightlystake twitter"
            />
          </a>
          <a
            href="https://discord.gg/7jtYTQZz2w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socials-logo"
              src={discord}
              alt="Brightlystake discord"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Welcome;
