import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import ProfilesettingNav from './settinglist'
class PrivateInfo extends Component {


  render() {
    const btnStyle = { borderRadius: '10px', marginTop: '16px', width: '40%'};
    return (
      <div className="settingprofile">
       <ProfilesettingNav/>
        <div className="setting-right">
          <div className="setting-popup">
            <div className="popup__right">
              <h3 style={{ fontSize: "22px", color: "#fff" }}>Personal Information</h3>
            </div>
            <form className="col-lg-12 col-md-12 col-12 login-card">
              <span className="input-inline">
                <span className="flex-grow" style={{flexGrow: "1", marginRight: "2rem"}}>
                  <label className="setting-label">First Name:</label>
                  <div className="input-group mb-3 inline-input" style={{ marginTop: '12px' }}>
                    <input type="text" className="form-control inputStyle" name='first'
                      required />
                  </div>
                </span>
                <span className="flex-grow" style={{flexGrow: "1"}}>
                  <label className="setting-label">Last Name:</label>
                  <div className="input-group mb-3 inline-input" style={{ marginTop: '12px' }}>
                    <input type="text" className="form-control inputStyle" name='last'
                      required />
                  </div>
                </span>
              </span>
              <span className="input-inline">
                <span className="flex-grow" style={{flexGrow: "1", marginRight: "2rem"}}>
                  <label className="setting-label">Email Address:</label>
                  <div className="input-group mb-3 inline-input" style={{ marginTop: '12px' }}>
                    <input type="email" className="form-control inputStyle" name='email'
                      required />
                  </div>
                </span>
                <span className="flex-grow" style={{flexGrow: "1"}}>
                  <label className="setting-label">Phone No:</label>
                  <div className="input-group mb-3 inline-input" style={{ marginTop: '12px' }}>
                    <input type="number" className="form-control inputStyle" name='number'
                      required />
                  </div>
                </span>
              </span>

              <label className="label">Address:</label>
              <div className="input-group mb-3 description-text" style={{ marginTop: '12px' }}>
                <textarea id="address" style={{ resize: "none" }} className="form-control inputStyle" name="Adress" rows="1" cols="50" required>
                </textarea>
              </div>
              <div style={{textAlign:"center"}}>
              <Link to="/addcourse" className="btn btn-outline-danger pt-3 pb-3 mr-2" style={btnStyle}>Update</Link>
              </div>
            </form>
          </div>

        </div>
      </div>
    )
  }
}

export default PrivateInfo