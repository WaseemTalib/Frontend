import React from 'react';
import './styles.css';
import Videocard from '../videocard';
import Rating from "../../ebooks/rating"
import {Link} from 'react-router-dom';

export default class extends React.Component {
    render() {
        return <div>
        <div className={"coursedetails d-flex" }>

     {window.innerWidth < 1000 ?     
            <div className={"coursedetails-center justify-content-center d-flex flex-column"}>
           <span className={"m-0 p-0"} style={{fontSize: "30px", fontWeight: "bold"}}>
                Introduction to Fixed-Wing Drone Design
                </span>
                <span className={"mb-4 mt-4"} style={{fontSize: "20px"}}>
                Learn how to design fixed-wing drones from specific missions.<br/>
                Explore Tradeoffs in aircraft design and performance.
                </span>
                <p><Rating stars={3.4}></Rating></p>
                <div className={"btninline d-flex mb-3 align-items-center"}>
                    <Link to={"/mypurchases"} className={"btn btn-outline-danger btncourseBuy"}>
                       <span className={"fa fa-shopping-cart mr-6"}></span> Add to My Purchase
                     </Link>
                   <p style={{fontSize: "30px", margin: "0"}}>$45.99</p>
                </div>
            </div>
            : 
            <div className={"coursedetails-center justify-content-center d-flex flex-column"}>
            <span className={"m-0 p-0"} style={{fontSize: "30px", fontWeight: "bold"}}>
                 Introduction to Fixed-Wing Drone Design
                 </span>
                 <span className={"mb-4 mt-4"} style={{fontSize: "20px"}}>
                 Learn how to design fixed-wing drones from specific missions.<br/>
                 Explore Tradeoffs in aircraft design and performance.
                 </span>
             </div>
            }



            <div className={"coursedetails-right d-flex flex-column justify-content-center"}>
            <h3 className={"coursedetails-instructor-heading pb-4"}>This Course Includes:</h3>    
                        <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span className="fa fa-television mr-4"></span>2 Hours on Demand Video</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span className="fa fa-link mr-4"></span>Full lifetime access</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span className="fa fa-bookmark mr-4"></span> Certificate of completion</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span className="fa fa-language mr-4"></span> English</span>
            </div>
        </div>
        <div className={"coursedetails-bottom d-flex" }>
           <div className={"coursedetails-learn d-flex"}>
        <div className={"d-flex flex-column justify-content-center"}>
        <h3 className={"coursedetails-instructor-heading pb-4"}>What you'll learn:</h3>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color:"green"}} className="fa fa-check mr-4"></span>How to culpa qui officia est laborum.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color:"green"}} className="fa fa-check mr-4"></span>How to exercitation nisi ut aliquip commodo consequat.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color:"green"}} className="fa fa-check mr-4"></span>How to Consectetur adipiscing elit.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color:"green"}} className="fa fa-check mr-4"></span>How to do eiusmod ad minim veniam, dolore magna aliqua.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color:"green"}} className="fa fa-check mr-4"></span>How to Duis aute irure velit esse cillum.</span>
            </div>
        </div>
        <div className={"coursedetails-right"}>
        <h3 className={"coursedetails-instructor-heading pb-4"}>Instructor</h3>
        <div className={"d-flex instructor"}>
        <img className={"instructor-logo"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" />
        <div >
        <p className={"instructor-name"}>{"Taimoor Ali"}</p>
        <p className={"instructor-details"}>4.3 Instructor Rating</p>
        <p className={"instructor-details"}>803 Students</p>
        <p className={"instructor-details"}>1 Course</p>
        </div>
        </div>
        </div>
        </div>
        <Videocard/>
            
        </div>
    }
}