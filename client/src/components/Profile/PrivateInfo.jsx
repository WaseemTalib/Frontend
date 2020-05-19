import React, { Component } from 'react'

class PrivateInfo extends Component {
  render () {
    return (
        <div className="private_one">
          <div className="info_wrapper">
          <div className="side_content">
            <h6>Credentials <span style={{float: `right`,color: `#ff3000`}}><i className="fa fa-pencil"></i></span></h6>
            <hr/>
            <ul className="items_list">
              <li className="list_content">
                <h6>
                  <i className="fa fa-id-card education_icon" aria-hidden="true"></i>
                  <span className="detail"> Superior University Lahore </span>
                </h6>
              </li>
              <li className="list_content">
                <h6>
                  <i className="fa fa-briefcase job_icon" aria-hidden="true"></i>
                  <span className="detail"> Web Developer </span>
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="info_wrapper" style={{marginTop: `20px`}}>
          <h6>About Yourself <span style={{float: `right`,color: `#ff3000`}}><i className="fa fa-pencil"></i></span></h6>
          <hr/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed aspernatur placeat deleniti autem odio</p>
        </div>
        </div>
    )
  }
}

export default PrivateInfo