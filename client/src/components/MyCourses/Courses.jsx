import React, { Component } from "react";
import Style2 from "../ebooks/ebookList/styles.module.css";
import Model from './model/index';

class Courses extends Component {
  render() {
    return (
      <div className="my_courses col-lg-9">
        <h4>Course Progress</h4>
        <div className="row">
          <div className="col-lg-3">
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
              <h6 className="static">Programming for</h6>
              <h6 className="dyna">Loreum ipsum is simply</h6>
              <div className="m-2 p-2">
                <h6 style={{color: `#00f`}}>Edit/Manage Course</h6>
                <div className="progress_bar" style={{["--i"]: 80}}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
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
              <h6 className="static">Programming for</h6>
              <h6 className="dyna">Loreum ipsum is simply</h6>
              <div className="m-2 d-flex flex-row justify-content-between align-items-center p-2">
                Total Students Enrolled : {Math.random().toString().substr(2,5)}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
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
              <h6 className="static">Programming for</h6>
              <h6 className="dyna">Loreum ipsum is simply</h6>
              <div className="m-2 d-flex flex-row justify-content-between align-items-center p-2">
                <div className="text-danger">In Review</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
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
              <h6 className="static">Programming for</h6>
              <h6 className="dyna">Loreum ipsum is simply</h6>
              <div className="m-2 p-2">
                <h6 style={{color: `#00f`}}>Edit/Manage Course</h6>
              <div className="progress_bar" style={{["--i"]: 50}}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
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
              <h6 className="static">Programming for</h6>
              <h6 className="dyna">Loreum ipsum is simply</h6>
              <div className="m-2 p-2">
                <h6 style={{color: `#00f`}}>Edit/Manage Course</h6>
              <div className="progress_bar" style={{["--i"]: 20}}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
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
              <h6 className="static">Programming for</h6>
              <h6 className="dyna">Loreum ipsum is simply</h6>
              <div className="m-2 p-2">
                <h6 style={{color: `#00f`}}>Edit/Manage Course</h6>
              <div className="progress_bar" style={{["--i"]: 100}}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <a href="#popup" className="course add_course" style={{border: `4px dashed`}}>
              <div className="">
                <i class="fa fa-plus-square" aria-hidden="true"></i>
                <div className="text_add">Add Course</div>
              </div>
            </a>
            <Model></Model>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
