import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css'

class ProfilesettingNav extends Component {


  render() {
    return (
        <div className="setting-left">
          <div className="setting_image_wrapper" style={{ zIndex: 1000 }}>
            <div className="setting_image" style={{ backgroundImage: `url(https://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Nice-Whatsapp-Dp-Profile-Images-101-300x300.jpg)` }}>
              {this.props.condition ? <div className=""><input type="file" name="aa" id="profile" style={{ display: `none` }} />
                <label htmlFor="profile" className="btn btn-danger"><i className="fa fa-camera"></i></label></div> : ""}
            </div>
            <h3 className="setting-username">Testing </h3>
          </div>
          <div className="setting-nav">
            <div className="setting-container">
              <ul className="setting-list">
                <li className="setting-item setting-item-1"><Link className="setting-link setting-link-1" to="" >Profile</Link></li>
                <li className="setting-item"> <Link className="setting-link" to="" >Account</Link></li>
                <li className="setting-item"> <Link className="setting-link" to="" >Payment</Link></li>
                <li className="setting-item"> <Link className="setting-link" to="" >Notification</Link></li>
                <li className="setting-item"> <Link className="setting-link" to="" >Video Prefrences</Link></li>
                <li className="setting-item"> <Link className="setting-link" to="" >Reminder</Link></li>
                <li className="setting-item"> <Link className="setting-link" to="" >Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
    )
  }
}

export default ProfilesettingNav;