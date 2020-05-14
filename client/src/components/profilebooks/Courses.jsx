import React, { Component } from "react";
import Style2 from "../ebooks/ebookList/styles.module.css";
import { Link } from "react-router-dom";
import Styles from "../ebooks/card/styles.module.css"
import Model from "./model"
class Courses extends Component {
  render() {
    return (
      <div className="my_courses col-lg-9 col-md-12">
        <h4>E-Books Progress</h4>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
          <div className={Styles.card}>
            <img src="http://covertopia.com/wp-content/uploads/2015/05/000227_Alt-320x500.jpg" className={Styles.image} alt="EBook" />
            <span className={Styles.title}>
                ADeeB Ahmad
            </span>
            <span className={Styles.writer}>
                {"by " + " Adeeb"}
            </span>
            <div className="m-2 d-flex flex-row justify-content-between align-items-center" style={{ padding: "0px 5px" }}>
            Total Perchased : {Math.random().toString().substr(2,5)}
            </div>
        </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div
              className={Style2.card + " course"}
              key={Math.random()}
              style={{ height: `max-content !important` }}
            >
              <img
                src={
                  "http://covertopia.com/wp-content/uploads/2015/05/000227_Alt-320x500.jpg"
                }
                className="book-img"
                alt="course"
              />
              <h6 className="static">Programming for</h6>
              <h6 className="dyna">Loreum ipsum is simply</h6>
              <div className="m-2 d-flex flex-row justify-content-between align-items-center p-2">
                Total Students Enrolled : {Math.random().toString().substr(2,5)}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div
              className={Style2.card + " course"}
              key={Math.random()}
              style={{ height: `max-content !important` }}
            >
              <img
                src={
                  "http://covertopia.com/wp-content/uploads/2015/05/000227_Alt-320x500.jpg"
                }
                className="book-img"
                alt="course"
              />
              <h6 className="static">Programming for</h6>
              <h6 className="dyna">Loreum ipsum is simply</h6>
              <div className="m-2 d-flex flex-row justify-content-between align-items-center p-2">
                <div className="text-danger">In Review</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div
              className={Style2.card + " course"}
              key={Math.random()}
              style={{ height: `max-content !important` }}
            >
              <img
                src={
                  "http://covertopia.com/wp-content/uploads/2015/05/000227_Alt-320x500.jpg"
                }
                className="book-img"
                alt="course"
              />
              <h6 className="static">Programming for</h6>
              <h6 className="dyna">Loreum ipsum is simply</h6>
              <div className="m-2 p-2">
                <h6 style={{color: `#00f`}}>Edit/Manage E-Books</h6>
              <div className="progress_bar" style={{["--i"]: 50}}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div
              className={Style2.card + " course"}
              key={Math.random()}
              style={{ height: `max-content !important` }}
            >
              <img
                src={
                  "http://covertopia.com/wp-content/uploads/2015/05/000227_Alt-320x500.jpg"
                }
                className="book-img"
                alt="course"
              />
              <h6 className="static">Programming for</h6>
              <h6 className="dyna">Loreum ipsum is simply</h6>
              <div className="m-2 p-2">
                <h6 style={{color: `#00f`}}>Edit/Manage E-Books</h6>
              <div className="progress_bar" style={{["--i"]: 20}}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div
              className={Style2.card + " course"}
              key={Math.random()}
              style={{ height: `max-content !important` }}
            >
              <img
                src={
                  "http://covertopia.com/wp-content/uploads/2015/05/000227_Alt-320x500.jpg"
                }
                className="book-img"
                alt="course"
              />
              <h6 className="static">Programming for</h6>
              <h6 className="dyna">Loreum ipsum is simply</h6>
              <div className="m-2 p-2">
                <h6 style={{color: `#00f`}}>Edit/Manage E-Books</h6>
              <div className="progress_bar" style={{["--i"]: 100}}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
          <a href="#popup" className="course add_course" style={{border: `4px dashed`}}>
              <div className="">
                <i class="fa fa-plus-square" aria-hidden="true"></i>
                <div className="text_add">Add E-Book</div>
              </div>
            </a>
          </div>
          <Model></Model>
        </div>
      </div>
    );
  }
}

export default Courses;
