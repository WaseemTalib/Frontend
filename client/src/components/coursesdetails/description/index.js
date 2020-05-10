import React, { Component } from 'react';
import './style.css';
export default class index extends Component {


    render() {
        return (
            <div className='col-12'>
               <div className={"requirement d-flex flex-column justify-content-center"}>
        <h3 className={"coursedetails-instructor-heading pb-4 pl-4"}>Requirements</h3>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color: "darkgrey"}} className="fa fa-circle mr-4"></span>Culpa qui officia est laborum.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color: "darkgrey"}} className="fa fa-circle mr-4"></span>Exercitation nisi ut aliquip commodo consequat.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color: "darkgrey"}} className="fa fa-circle mr-4"></span>Consectetur adipiscing elit.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color: "darkgrey"}} className="fa fa-circle mr-4"></span>Do eiusmod ad minim veniam, dolore magna aliqua.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color: "darkgrey"}} className="fa fa-circle mr-4"></span>Duis aute irure velit esse cillum.</span>
            </div>
                <div className="col-11" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <h2 className="description-heading col-lg-7 col-12" style={{ marginTop: '2rem' }}>
                        Description</h2>
                    </div>
                    <div className="col-11" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <div className="description col-lg-10 col-12" style={{  marginTop: '10px' }}>
                      <p className={"description-p"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.**</p>
                      <p className={"description-p"}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p className={"description-p"}>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                      <p className={"description-p"}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                </div>
                <div className={"requirement mb-5 d-flex flex-column justify-content-center"}>
        <h3 className={"coursedetails-instructor-heading pb-4 pl-4"}>Who is this course for:</h3>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color: "darkgrey"}} className="fa fa-circle mr-4"></span>Anyone who want to learn qui officia est laborum.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color: "darkgrey"}} className="fa fa-circle mr-4"></span>Anyonw who nisi ut aliquip commodo consequat.</span>
                <span className={"coursedetails-right-p d-block pl-2 pb-2"}><span style={{color: "darkgrey"}} className="fa fa-circle mr-4"></span>Anyone who Consectetur adipiscing elit.</span>
            </div>
            </div>
        )
    }
}