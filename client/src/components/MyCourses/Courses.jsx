import React, { Component } from "react";
import Style2 from "../ebooks/ebookList/styles.module.css";
import { Link } from "react-router-dom";
import Model from "./model";
import Card from "../courses/courseList/CourseCard"
class Courses extends Component {
  renderCourses = ()=>{
    const dummy = [1,2,3,4,5,6,7];
    const { condition } = this.props
    return dummy.map((el,i)=> <div className="col-lg-3 col-md-4 col-sm-6 category_card">
    {condition ? <div
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
        <Link to="/addcontent" style={{ color: `#00f` }}>Edit/Manage Course</Link>
        <div className="progress_bar" style={{ ["--i"]: 80 }}></div>
      </div>
    </div> : <Card style={ i%4 >= 3 ? {right: "100%"} : {left:`100%`}}  />}
  </div>)
  }
  render() {
    const { profile, courses, topics } = this.props;
    console.log(courses);
    const { condition } = this.props
    return (
      <div className="my_courses col-lg-9 col-md-12">
        {condition ? <h4>Course Progress</h4> : ""}
        <div className="row">
          {this.renderCourses()}
          {condition ? <div className="col-lg-3 col-md-4 col-sm-6">
            <a href="#popup" className="course add_course" style={{ border: `4px dashed` }}>
              <div className="">
                <i className="fa fa-plus-square" aria-hidden="true"></i>
                <div className="text_add">Add Course</div>
              </div>
            </a>
          </div> : ""}
          <Model profile={profile} topics={topics}></Model>
        </div>
      </div>
    );
  }
}

export default Courses;
