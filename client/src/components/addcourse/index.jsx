import React, { Component } from 'react'
import ProfileHeader from '../Profile/ProfileHeader'
import PersonalInfo from '../Profile/PersonalInfo';
import Adddetail from "./adddetail"
import { Link } from 'react-router-dom';
class Profile extends Component {
  
  render () {
    const condition = this.props.ismyProfile;
    
    return (
      <div>
        <ProfileHeader condition={condition} index={1} />
        <div className="container-fluid">
        <div className="row">
          <PersonalInfo /> 
          <div className="col-lg-9 col-md-12">
            <Adddetail/>
          </div> 
          
        </div>
        </div>
      </div>
    )
  }
}
export default Profile