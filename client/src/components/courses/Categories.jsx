import React, { Component } from "react";
import Card from "../card";
import Styles from '../ebooks/ebookList/styles.module.css';
class Categories extends Component {
  state = {
    index: 0,
    cards: 6,
    width: window.innerWidth
  }
  renderCourses = (list) => {
    const myList = list.slice(this.state.index, this.state.index + this.state.cards);
    return myList.map((el, i) => {
      return <div className="col-lg-2 col-md-3 col-sm-4 col-6"><Card name={el.name} courses={true} link={this.props.link} image={el.image} _id={i} /></div>
    })
  }
  componentDidMount() {
    window.onresize = this.onResize;
    this.onResize()
  }
  onResize = ()=>{
    this.setState({width: window.innerWidth});
    if(window.innerWidth <= 992) this.setState({cards: 4})
    if(window.innerWidth <= 768) this.setState({cards: 3})
    if(window.innerWidth <= 576) this.setState({cards: 2})
    if(window.innerWidth <= 300) this.setState({cards: 1})
  }
  render() {
    const { list, heading } = this.props;
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
      <div className="col-12 categories">
        <div className="container-fluid">
          <div className="col-12">
            <h4 className="" style={{ fontWeight: '700', fontSize: '25px', margin: '20px 20px' }}> {heading}</h4>
          </div>
          <hr style={{margin: "0 1rem 2rem 1rem"}} />
          <div className="col-12">
            <div className="col-12">
                  {leftDom}
              <div className="container-fluid">
                <div className="row">
                  <div className="row">
                  {this.renderCourses(list)}
                  </div>
                </div>
              </div>
                  {rightDom}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
