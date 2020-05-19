import React, { Component } from 'react';

export default class index extends Component {


    render() {
        return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cardhover mb-3">
            <img className="card-img-top" width="100" height="150" src={this.props.img} alt="Card image cap" />
            <div className="card-body" style={{padding: `0.6rem`}}>
                <h5 className="card-title" style={{ fontSize: "12px",fontWeight: "600" }}>Freelancer of Upwork & Fiverr</h5>
                <p className="card-text" style={{ fontSize: "8px" }}>19K Members</p>
            </div>
        </div>
        </div>
        )
    }
}