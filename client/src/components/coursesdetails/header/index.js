import React, { Component } from 'react';
import Styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Rating from "../../ebooks/rating"
import { gray } from 'color-name';
export default class index extends Component {
    render() {
        return (
            <div>
                {window.innerWidth > 1000 ?
                    <div className="d-flex align-items-center">
                        <div className={Styles.header + " col-9 col-lg-9 col-md-9 col-sm-9 "}>
                            <video width="100%" height="350" controls>
                                <source src="../../assets/babyvideo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                    </video>
                        </div>
                        <div className={Styles.header + " col-3 col-lg-3 col-md-3 col-sm-3 "}>
                            <div className={"coursedetails-center justify-content-center d-flex flex-column"}>
                                <span className={"m-0 p-0"} style={{ textAlign: "center", color: "gray", fontSize: "20px", fontWeight: "bold" }}>
                                    Introduction to Fixed-Wing
                  </span>
                                <span className={"mb-4 mt-4"} style={{ textAlign: "center", fontSize: "14px", color: "gray", }}>
                                    Learn how to design fixed-wing drones from specific missions
                </span>
                                <span style={{ textAlign: "center" }}>
                                    <p><Rating stars={3.4}></Rating></p>
                                    <div className={"btninline mb-3 "}>
                                        <Link to={"/mypurchases"} className={"btn btn-outline-danger btncourseBuy m-0"}>
                                            <span className={"fa fa-shopping-cart mr-6"}></span> Add to My Purchase
                       </Link>
                                        <p style={{ fontSize: "30px", margin: "0", color: "gray" }}>$45.99</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={Styles.header + " col-12 col-lg-12 col-md-12 col-sm-12 "}>
                        <video width="100%" height="350" controls>
                            <source src="../../assets/babyvideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                 </video>

                    </div>
                }
            </div>
        )
    }
}
