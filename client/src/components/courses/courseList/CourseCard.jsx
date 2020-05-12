import React from "react";
import User from "../../../assets/img_avatar.png";
import Style2 from "../../ebooks/card/styles.module.css";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  console.log(props)
  return (
    <div className="card_outer" style={{ display: `inline-block`,position: `relative` }}>
      <div
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
          <Link to="/coursedetails" className="btn btn-danger">
            Buy Now
          </Link>
          <h6 className="tag mt-2">${Math.ceil(Math.random()*100)}</h6>
        </div>
      </div>
      <div className="course_details_wrapper" style={props.style}>
        <div className="course_details">
          <h2>Hello</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magnam
          earum corrupti fuga, qui iusto officiis at natus delectus quis dolor
          ea nam, dignissimos, harum voluptatibus. Voluptate amet nisi
          dignissimos?
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
