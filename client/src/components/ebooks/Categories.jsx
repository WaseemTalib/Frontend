import React, { Component } from "react";
import { Link } from "react-router-dom"
import Styles from '../ebooks/ebookList/styles.module.css';
class Categories extends Component {
  state = {
    index: 0,
    cards: 6
  }
  renderCourses = (list) => {
    const myList = list.slice(this.state.index, this.state.index + this.state.cards);
    return myList.map((el, i) => {
      return <Link to="/ebookscategories" className="col-lg-2 col-md-3 col-sm-4 p-1" >
     <div style={{ padding:"1rem 0",border: "1px solid rgba(0,0,0,0.2)",boxShadow: "0 .2rem .5rem rgba(0,0,0,0.3)", marginBottom: "2rem"}}>
      <h6 style={{ marginLeft: "1rem", color: "rgba(0,0,0,0.7)"}}>{el.name}</h6>
      </div>
      </Link>
    })
  }
  render() {
    const { list, heading } = this.props;
    const leftDom =
      this.state.index > 0 ? (
        <div
          className={Styles.leftWrapper}
          style={{ position: "absolute", top: "15%", left: 0, zIndex: 100 }}
        >
          <button
            className={Styles.btnNav}
            style={{ zIndex: 100 }}
            onClick={() =>
              this.setState({ index: this.state.index - this.state.cards })
            }
          >
            <i className="fa fa-chevron-left" style={{ margin: "5px" }}></i>
          </button>
        </div>
      ) : (
          ""
        );
    const rightDom = (
      <div
        className={Styles.rightWrapper}
        style={{
          position: "absolute",
          top: "15%",
          width: "50px",
          background: "transparent",
          right: 0,
        }}
      >
        {this.state.index + this.state.cards < list.length ? (
          <button
            className={Styles.btnNav + " " + Styles.rightbtn}
            onClick={() =>
              this.setState({ index: this.state.index + this.state.cards })
            }
          >
            <i
              className="fa fa-chevron-right"
              style={{ margin: "5px", zIndex: 100 }}
            ></i>
          </button>
        ) : (
            ""
          )}
      </div>
    );
    return (
      <div className="col-12 categories">
        <div className="container-fluid">
          <div className="col-12">
            <h4 className="" style={{ fontWeight: '700', fontSize: '25px', margin: '20px 30px' }}> {heading}</h4>
          </div>
          <hr style={{margin: "0 2rem 2rem 2rem"}} />
         
          <div className="col-12">
            <div className="col-12">
              <div className="container-fluid">
                <div className="row">
                  {leftDom}
                  {this.renderCourses(list)}
                  {rightDom}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
