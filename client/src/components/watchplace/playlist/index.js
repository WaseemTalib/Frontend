import React, { Component } from 'react';
import '../videocard/style.css';
export default class index extends Component {


    state = {
        isActive: false
    }
    handleShow = () => {
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
                <div className="videocard-item">
                    <div className="upper-align">
                        <span className="fa fa-play"></span>
                        <span className="videocard-title">Video Name 1</span>
                        <span className="fa fa-share mr-3"></span>
                        {this.state.isActive ?
                            <span className="fa fa-sort-up" onClick={this.handleShow}></span>
                            :
                            <span className="fa fa-sort-down" onClick={this.handleShow}></span>
                        }
                    </div>
                    <div className="bottom-align">
                        <span className="videocard-count">1/20</span>
                        <span className="videocard-duration">02:00</span>
                    </div>
                </div>

                {this.state.isActive ?
                    <div className="videocard-comment-section">
                        <div className="videocard-comment">
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt="profile" style={{ width: "40px", height: "40px", marginRight: " 8px", borderRadius: "1000px" }}></img>
                            <span>
                                <div className="videocard-comment-name">Muhammad Waseem</div>
                                <div className="videocard-comment-disc">Please tell me what do you want</div>
                            </span>
                        </div>
                        <div className="videocard-comment-input">
                            <input className="videocard-input" placeholder="Add comment" />
                        </div>
                    </div>
                    : ""}
            </div>

        )
    }
}