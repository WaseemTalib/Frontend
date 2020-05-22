import React from 'react';
import './styles.css';
import Rating from '../rating'
export default class extends React.Component {
    render() {
        return <div>
        <div className={"coursedetails-w d-flex" }>
         
            <div className={"coursedetails-center-w justify-content-center d-flex flex-column"}>
           <span className={"m-0 p-0"} style={{fontSize: "30px", fontWeight: "bold"}}>
                Introduction to Fixed-Wing Drone Design
                </span>
                <span className={"mb-4 mt-4"} style={{fontSize: "16px"}}>
                Learn how to design fixed-wing drones from specific missions.<br/>
                Explore Tradeoffs in aircraft design and performance.
                <span style={{textAlign: "center"}}> <Rating stars={4} className="mt-3" ></Rating></span>
               <hr/>
                </span>
            </div>
          
        </div>
        <div className={"coursedetails-bottom-w d-flex" }>
           <div className={"coursedetails-learn-w d-flex"}>
        <div className={"d-flex flex-column justify-content-center"}>
        <h3 className={"coursedetails-instructor-heading pb-4"}>What you'll learn:</h3>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color:"green"}} className="fa fa-check mr-4"></span>How to culpa qui officia est laborum.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color:"green"}} className="fa fa-check mr-4"></span>How to exercitation nisi ut aliquip commodo consequat.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color:"green"}} className="fa fa-check mr-4"></span>How to Consectetur adipiscing elit.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color:"green"}} className="fa fa-check mr-4"></span>How to do eiusmod ad minim veniam, dolore magna aliqua.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color:"green"}} className="fa fa-check mr-4"></span>How to Duis aute irure velit esse cillum.</span>
            </div>
        </div>
        </div>
            
        </div>
    }
}