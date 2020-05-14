import React, { Component } from 'react'
import Settingform from './settingform';

export default class Profile extends Component {

  render() {

    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12" style={{padding: "3rem 1rem", backgroundColor: "#f7f7f7"}}>
          <Settingform />
            </div>
        </div>
      </div>
    )
  }
}