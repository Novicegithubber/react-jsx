import React, { Component } from "react";
import imageinsrc from "./imageinsrc.png";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title">Your name here</h1>
          <br />
          <img src="/imageinpublic.png" />
          <p>This is the image imported from public folder</p>
          <br />
          <img src={imageinsrc} />
          <p>This is the image imported from src folder</p>
        </div>
        <br />
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default App;
