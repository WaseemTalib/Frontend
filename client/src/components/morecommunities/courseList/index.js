import React, { Component } from "react";
import "./style.css";
import Card from "../courseCard";

export default class index extends Component {
  render() {
    const images = ["https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126__340.jpg","https://cdn.instructables.com/FG6/NSYJ/IM5WPGD9/FG6NSYJIM5WPGD9.LARGE.jpg?auto=webp&fit=bounds","https://buysellcourse.com/wp-content/uploads/2019/07/Hustle-With-Fiverr.jpg","https://www.ifipnews.org/wp-content/uploads/2016/12/star_award_.jpg"]
    return (
      <div className="center2">
        <div className="communities">
          <span className="communities-heading">
            Communities You're Following
          </span>

          <div className="container-fluid">
            <div className="cards row">
              {images.map(el=><Card img={el}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
