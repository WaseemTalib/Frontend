import React, { Component } from "react";
import ListItems from "./ListItems";

class PersonalInfo extends Component {
  render() {
    return (
        <div className="info_wrapper">
          <div className="side_content">
            <h6>Personal Information<span style={{float: `right`}} className="text-danger">Edit Info</span></h6>
            <ListItems />
          </div>
        </div>
    );
  }
}

export default PersonalInfo;