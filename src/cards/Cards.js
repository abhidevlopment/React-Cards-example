import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../assets/catering.jpg";
import img2 from "../assets/cuisine.jpg";
import img3 from "../assets/fish-menu.jpg";

class Cards extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} title="Console" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img1} title="Playground" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img1} title="Adventure" />
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
