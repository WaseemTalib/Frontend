import React, { Component } from "react";
import Card from "../card";
import Styles from '../ebooks/ebookList/styles.module.css';
class Categories extends Component {
  state={
    index: 0,
    cards: 6
  }
  renderCourses=(list) => {
    const myList = list.slice(this.state.index,this.state.index + this.state.cards);
    return myList.map((el,i) => {
      return <div className="col-lg-2"><Card name={el.name} image={el.image} _id={i}  /></div>
    })
  }
  render() {
    const { list,heading } = this.props;
    const leftDom =
      this.state.index > 0 ? (
        <div
          className={Styles.leftWrapper}
          style={{ position: "absolute", top: "50%", left: 0, zIndex: 100 }}
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
          top: "50%",
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
      <div>
        <div className="container-fluid">
          <h1> {heading} </h1>
          <div className="row">
            {leftDom}
            {this.renderCourses(list)}
            {rightDom}
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
