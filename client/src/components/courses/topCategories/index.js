import Styles from '../../ebooks/ebookList/styles.module.css';
import CourseCard from '../courseList/CourseCard';
import React, { Component } from 'react';
import '../style.css';
var dummy = ["Hello", "Adeeb", "Ahmad", "Ismail", "Zeeshan", "Waseem", "Vely"];
export default class index extends Component {
    state = {
        index: 0,
        width: window.innerWidth,
        cards: 5
    };

 


    renderCourses = (list) => {
        const myList = list.slice(this.state.index, this.state.index + this.state.cards);
        return myList.map((el, i) => {
            return <CourseCard el={el} index={i} style={myList.length - 1 === i ? { right: "100%" } : { left: `100%` }} after={myList.length - 1 === i ? { left: 0 } : { right: 0 }} />
        })
    }
    render() {
        const { heading } = this.props;
        const leftDom = (this.state.index > 0) ? <div className={Styles.leftWrapper} style={{ position: "absolute", top: "50%", left: 0, zIndex: 100 }}>
            <button className={Styles.btnNav} style={{ zIndex: 100 }} onClick={() => this.setState({ index: this.state.index - this.state.cards })} ><i className="fa fa-chevron-left" style={{ margin: "5px" }}></i></button>
        </div> : "";
        return (
            <div >
                <div className={'col-12 '}>
                    <div className="col-12">
                        <h2 className="col-lg-12 col-12 heading-primary" style={{ fontWeight: '700', marginTop: '50px' }}>
                        {heading} </h2>
                        <div style={{ position: `relative` }}>
                            {leftDom}
                            <div className="col-lg-12">
                                <div className="container-fluid">
                                    <div className="row course_list" style={{ justifyContent: `space-evenly` }}>
                                        {this.renderCourses(dummy)}
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.rightWrapper} style={{ position: "absolute", top: "50%", width: "50px", background: "transparent", right: 0 }}>
                                {this.state.index + this.state.cards < dummy.length ? <button className={Styles.btnNav + " " + Styles.rightbtn} onClick={() => this.setState({ index: this.state.index + this.state.cards })}  ><i className="fa fa-chevron-right" style={{ margin: "5px", zIndex: 100 }}></i></button> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}