import React, { Component } from "react";
import Style2 from "../ebooks/ebookList/styles.module.css";
import { Link } from "react-router-dom";
import Styles from "../ebooks/card/styles.module.css"
import Model from "./model"
import Card from "../ebooks/card"
class Courses extends Component {
  renderCourse(){
    const dummy = [1,2,3,4,5];
    const { condition } = this.props;
    const ebook = {
      image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512156631l/35379976._SY475_.jpg",
      title:"The Fire Heart Chronicles",
      writer:"abc",
      id:1,
      price:"$25",
      star:4.2
    }
    return dummy.map((el,i)=>
      <div key={el*i} className="col-lg-3 col-md-4 col-sm-6">
        {condition ? <Link to="/coursedetails" className={Styles.card + " my_card"} style={{width: "auto"}}>
            <img src="http://covertopia.com/wp-content/uploads/2015/05/000227_Alt-320x500.jpg" className={Styles.image} alt="EBook" />
            <span className={Styles.title}>
                Hello World
            </span>
            <span className={Styles.writer}>
                by Hello World
            </span>
            { i >= 2 ? <div className="m-2 p-2">
                <Link to="/addbookcontent" style={{color: `#00f`}}>Edit/Manage E-Books</Link>
              <div className="progress_bar" style={{["--i"]: 50}}></div>
              </div> : <div className="m-2 d-flex flex-row justify-content-between align-items-center" style={{ padding: "0px 5px" }}>
            Total Perchased : {Math.random().toString().substr(2,5)}
            </div>}
        </Link> : <Card {...ebook} />}
      </div>
    )
  }
  render() {
    const { condition } = this.props;
    return (
      <div className="my_courses col-lg-9 col-md-12">
        <h4>E-Books Progress</h4>
        <div className="row">
          {this.renderCourse()}
          {condition ? <div className="col-lg-3 col-md-4 col-sm-6">
          <a href="#popup" className="course add_course" style={{height: "390px" , border: `4px dashed`}}>
              <div className="">
                <i className="fa fa-plus-square" aria-hidden="true"></i>
                <div className="text_add">Add E-Book</div>
              </div>
            </a>
            </div> : ""}
          <Model/>
          </div>
      </div>
    );
  }
}

export default Courses;
