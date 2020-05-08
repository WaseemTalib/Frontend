import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    return (
      <div className="col-lg-3" style={{ marginTop: `100px` }}>
        <div className="info_wrapper">
          <div className="post_share">
            <div className="total_posts">
              <h6>Total Posts</h6>
              <p>50+</p>
            </div>
            <div className="total_shares">
              <h6>Total Shares</h6>
              <p>200+</p>
            </div>
          </div>
          <div className="side_content">
            <h6>Personal Information<span style={{float: `right`}} className="text-danger">Edit Info</span></h6>
            <ul className="items_list">
              <li className="list_content">
                <h6>
                  <i className="fa fa-volume-control-phone phone_no_icon "></i> 
                  <span className="detail"> +92 300 000 0000 <br/><span className="heading_content"> Phone No </span> </span>
                </h6>
              </li>
              <li className="list_content">
                <h6>
                  <i className="fa fa-envelope envalope_icon"></i>
                  <span className="detail"> gmail@email.com <br/><span className="heading_content"> Email Address </span></span>
                </h6>
              </li>
              <li className="list_content">
                <h6>
                  <i className="fa fa-map-marker location_icon"></i>
                  <span className="detail"> N/A <br/> <span className="heading_content">&nbsp;</span></span>
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;