import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    return (
      <div className="col-lg-3" style={{ marginTop: `200px` }}>
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
          <h6>Personal Information<span style={{float: `right`}} className="text-danger">Edit Info</span></h6>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
