import React from "react";
import User from "../../../assets/img_avatar.png";
import Rating from '../rating'
import Style2 from "../../ebooks/card/styles.module.css";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  console.log(props)
  return (
    <div className="card_outer" style={{ display: `inline-block`,position: `relative` }}>
      <Link
        to="/coursedetails"
        className={Style2.card + " course"}
        key={Math.random()}
        style={{ height: `max-content !important` }}
      >
        <img
          src={
            "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg"
          }
          className="course-img"
          alt="course"
        />
        <img src={User} className="userImage" alt="user" />
        <h6 className="static">Hello World</h6>
        <h6 className="dyna">Loreum ipsum is simply</h6>
        <div className="m-2 d-flex flex-row justify-content-between align-items-center p-2">
        <Rating stars={4} ></Rating>
          <h6 className="tag mt-2">${Math.ceil(Math.random()*100)}</h6>
        </div>
      </Link>
      <div className="course_details_wrapper" style={props.style}>
        <div className="course_details">
          <p>Last Updated 5/20/20</p>
          <h2>Hello</h2>
          <p><span style={{color: `#2998aa`}}>Web Development</span> | Development</p>
          <p style={{fontSize: `0.8rem`}}> <i className="fa fa-play" aria-hidden="true"></i> 404 Lectures | <i className="fa fa-clock-o" aria-hidden="true"></i> 47 hours | <i className="fa fa-sliders" aria-hidden="true"></i> All levels</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magnam
          earum corrupti fuga.</p>
          <ul style={{color: `#999`}}>
            <li>HTML &#38; CSS introduction</li>
            <li>HTML &#38; CSS introduction</li>
            <li>HTML &#38; CSS introduction</li>
            <li>HTML &#38; CSS introduction</li>
            <li>HTML &#38; CSS introduction</li>
          </ul>
          <button style={{backgroundColor: `#ff3000`,color: `#fff`,padding: `1rem 3rem`,borderRadius: `3px`,border:`none`}}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
