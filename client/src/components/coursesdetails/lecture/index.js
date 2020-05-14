import React, { Component } from 'react';
import '../videocard/style.css';
export default class index extends Component {


    state = {
        isActive: false,
        isDrop: false
    }

    child = () => {
        if (this.state.isActive == false) {
            this.setState({
                isActive: true
            })
        } else {
            this.setState({
                isActive: false
            })
        }
    }

    render() {
        return (
            <div>
                <div className="course-content-item">
                    <div className="course-content-align">
                        <span className="fa fa-play-circle icon-blue"></span>
                        <span className="course-content-title">Video Name 1</span>
                        {this.state.isActive ?
                            <span className="fa fa-sort-up icon-blue" onClick={this.child}></span>
                            :
                            <span className="fa fa-sort-down icon-blue" onClick={this.child}></span>
                        }
                        <span className="course-content-lecture">Preview</span>
                        <span className="course-content-time" >39:40</span>

                    </div>
                    {this.state.isActive ?
                        <p className="active-align">Hey there, i m here. There is a wonderful course available for you.</p>
                        : ""}
                </div>
            </div>

        )
    }
}