import React, { Component } from 'react'

class PrivateInfo extends Component {
  render () {
    return (
      <div className="col-lg-3">
        <div className="info_wrapper">
          <div className="side_content">
            <h6>Credentials <span style={{float: `right`,color: `#ff3000`}}><i class="fa fa-pencil"></i></span></h6>
            <hr/>
            <ul className="items_list">
              <li className="list_content">
                <h6>
                  <i class="fa fa-id-card education_icon" aria-hidden="true"></i>
                  <span className="detail"> Add Education <br/><span className="heading_content"> Education </span> </span>
                </h6>
              </li>
              <li className="list_content">
                <h6>
                  <i class="fa fa-briefcase job_icon" aria-hidden="true"></i>
                  <span className="detail"> Add Job <br/><span className="heading_content"> Job </span></span>
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="info_wrapper" style={{marginTop: `20px`}}>
          <h6>About Yourself <span style={{float: `right`,color: `#ff3000`}}><i class="fa fa-pencil"></i></span></h6>
          <hr/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed aspernatur placeat deleniti autem odio</p>
        </div>
      </div>
    )
  }
}

export default PrivateInfo