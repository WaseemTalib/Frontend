import React, { Component } from 'react';
import '../videocard/style.css';
import Lecture from '../lecture'
export default class index extends Component {


    state = {
        isActive: false,
        isDrop: false
    }
    parent = () => {
        if (this.state.isDrop == false) {
            this.setState({
                isDrop: true
            })
            console.log("drop")
        } else {
            this.setState({
                isDrop: false
            })
            console.log("not drop")
        }
    }

    child = () => {
        if (this.state.isActive == false) {
            this.setState({
                isActive: true
            })
            console.log("drop")
        } else {
            this.setState({
                isActive: false
            })
            console.log("not drop")
        }
    }
    render() {
        return (
            <div>
                <div className="course-content-header" onClick={this.parent}>
                    {this.state.isDrop ?
                        <span className="fa fa-minus mr-2 icon-blue"></span>
                        :
                        <span className="fa fa-plus mr-2 icon-blue"></span>
                    }
                    <h5 className="course-content-lecturetitle">Getting Started</h5>
                    <span className="course-content-lecture" >12 Lectures</span>
                    <span className="course-content-time" >39:40</span>
                </div>
                {this.state.isDrop ?
                    <div>
                        <Lecture />
                        <Lecture />
                        <Lecture />
                    </div>
                    : ""}
            </div>

        )
    }
}