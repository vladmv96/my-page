import React, { Component } from "react";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  transformCircles = () => {
    const circles = document.getElementsByClassName("circle-2");
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    const angle = (2 * Math.PI) / circles.length;
    let deg = 0;
    if (!this.state.open) {
      document.getElementById("root").style.background =
        "rgba(255, 255, 255, 0.5)";
      document.getElementById("avatar").style.left = `${x}px`;
      for (let i = 0; i < circles.length; i++) {
        circles[i].style.height = `${170 - circles.length * 4}px`;
        circles[i].style.width = `${170 - circles.length * 4}px`;
        circles[i].style.left = `${x + Math.cos(deg) * 300}px`;
        circles[i].style.top = `${y + Math.sin(deg) * 300}px`;
        deg += angle;
      }
      this.setState({ open: true });
    } else {
      const circles = document.getElementsByClassName("circle");
      document.getElementById("root").style.background =
        "rgba(255, 255, 255, 0)";
      const headCircle = document.getElementById("avatar");
      headCircle.style.height = `300px`;
      headCircle.style.width = `300px`;
      for (let i = 0; i < circles.length; i++) {
        circles[i].classList.remove('hovered');
        circles[i].style.left = `${x}px`;
        circles[i].style.top = `${y}px`;
        deg += angle;
      }
      this.setState({ open: false });
    }

    const circles3 = document.getElementsByClassName("circle-3");
    for (let i = 0; i < circles3.length; i++) {
      circles3[i].style.left = "50%";
      circles3[i].style.top = "50%";
      circles3[i].style.visibility = "hidden";
    }
  };

  heaveCircles = event => {
    const newID = event.target.id;
    const circles = document.getElementsByClassName("circle-2");
    const x = window.innerWidth / 6;
    const y = window.innerHeight / 2;
    const len = circles.length - 1;
    const angle = (2 * Math.PI) / len;
    let deg = 0;
    for (let i = 0; i <= len; i++) {
      if (circles[i].id !== newID) {
        circles[i].classList.add('hovered');
        circles[i].style.height = `${100 - len * 4}px`;
        circles[i].style.width = `${100 - len * 4}px`;
        circles[i].style.left = `${x + Math.cos(deg) * 170}px`;
        circles[i].style.top = `${y + Math.sin(deg) * 170}px`;
        deg += angle;
      }
    }

    const circles3 = document.getElementsByClassName("circle-3");
    for (let i = 0; i < circles3.length; i++) {
      circles3[i].style.left = "50%";
      circles3[i].style.top = "50%";
      circles3[i].style.visibility = "hidden";
    }

    const headCircle = document.getElementById("avatar");
    headCircle.style.height = `150px`;
    headCircle.style.width = `150px`;
    headCircle.style.left = `${x}px`;
    headCircle.style.top = `${y}px`;
  };

  createCenter = event => {
    this.heaveCircles(event);
    const newID = event.target.id;
    const newCenter = document.getElementById(newID);
    newCenter.classList.remove('hovered');
    newCenter.style.top = "50%";
    newCenter.style.left = `${window.innerWidth / 2}px`;
    newCenter.style.height = "180px";
    newCenter.style.width = "180px";

    const newCircles = document.getElementsByClassName(`circle-${newID}`);
    const x = window.innerWidth;
    const y = window.innerHeight;
    const angle = (2 * Math.PI) / newCircles.length;
    let deg = 0;
    for (let i = 0; i < newCircles.length; i++) {
      newCircles[i].style.visibility = "visible";
      newCircles[i].style.height = `${150 - newCircles.length * 4}px`;
      newCircles[i].style.width = `${150 - newCircles.length * 4}px`;
      newCircles[i].style.left = `${x / 2 + Math.cos(deg) * 200}px`;
      newCircles[i].style.top = `${y / 2 + Math.sin(deg) * 200}px`;
      deg += angle;
    }
  };

  render() {
    return (
      <div className="app">
        <div id="react" className="circle circle-3 circle-programming" />
        <div id="redux" className="circle circle-3 circle-programming" />
        <div id="es6" className="circle circle-3 circle-programming" />
        <div id="vue" className="circle circle-3 circle-programming" />
        <div id="webpack" className="circle circle-3 circle-programming" />
        <div id="sass" className="circle circle-3 circle-programming" />

        <a
          href="https://notes-vladmv.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="notes" className="circle circle-3 circle-projects" />
        </a>

        {/* <div id="js" className="circle circle-2" onClick={this.createCenter} /> */}

        {/* <div
          id="html"
          className="circle circle-2"
          onClick={this.createCenter}
        /> */}

        <div
          id="programming"
          className="circle circle-2"
          onClick={this.createCenter}
        />

        <a
          href="https://github.com/vladmv96"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            id="github"
            className="circle circle-2"
          />
        </a>

        <a
          href="https://telegram.me/vlad_mv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            id="telegram"
            className="circle circle-2"
          />
        </a>

        <a
          href="https://instagram.com/vlad_mv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            id="instagram"
            className="circle circle-2"
          />
        </a>

        {/* <div
          id="youtube"
          className="circle circle-2"
          onClick={this.createCenter}
        /> */}

        <a
          href="https://moikrug.ru/vladikas1996"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            id="mk"
            className="circle circle-2"
          />
        </a>

        <div
          id="projects"
          className="circle circle-2"
          onClick={this.createCenter}
        />
        {/* <div
          id="plus"
          className="circle circle-2"
        /> */}
        <div
          id="avatar"
          className="circle circle-1"
          onClick={this.transformCircles}
        />
      </div>
    );
  }
}

export default App;
