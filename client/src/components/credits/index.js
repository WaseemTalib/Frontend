import React, { Component } from 'react';
import './style.css';
export default class index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="credits">
         
            
            <div className="credits-section">
         <div className="credits-total">
            <div className="yourcredits">Your Credits</div>
            <div className="yourtotalcredits">Your Total Credits are $0.00</div>
                </div>
               <div className="credits-box" style={{backgroundColor: "#fff",width: "100%"}}>
                <div className="credits-container-heading">
                    <h3 className="credits-history-heading">Credit History</h3>
                   <div className="credits-list">
                    <p className="credits-item-heading">Amount</p>
                    <p className="credits-item-heading">Status</p>
                    <p className="credits-item-heading">Valid Form</p>
                    <p className="credits-item-heading">Expiration Date</p>
                </div>
                </div>
                <div className="credits-container">
                  <h3 className="credits-history">Web Hosting</h3>
                   <div className="credits-list">
                    <p className="credits-item">30$</p>
                    <p className="credits-item">Received</p>
                    <p className="credits-item">Null</p>
                    <p className="credits-item">30-06-2020</p>
                </div>
                </div>
                <div className="credits-container">
                  <h3 className="credits-history">Web Hosting</h3>
                   <div className="credits-list">
                    <p className="credits-item">30$</p>
                    <p className="credits-item">Received</p>
                    <p className="credits-item">Null</p>
                    <p className="credits-item">30-06-2020</p>
                </div>
                </div>
                <div className="credits-container">
                  <h3 className="credits-history">Web Hosting</h3>
                   <div className="credits-list">
                    <p className="credits-item">30$</p>
                    <p className="credits-item">Received</p>
                    <p className="credits-item">Null</p>
                    <p className="credits-item">30-06-2020</p>
                </div>
                </div>
                <div className="credits-container">
                  <h3 className="credits-history">Web Hosting</h3>
                   <div className="credits-list">
                    <p className="credits-item">30$</p>
                    <p className="credits-item">Received</p>
                    <p className="credits-item">Null</p>
                    <p className="credits-item">30-06-2020</p>
                </div>
                </div>
                <div className="credits-container">
                  <h3 className="credits-history">Web Hosting</h3>
                   <div className="credits-list">
                    <p className="credits-item">30$</p>
                    <p className="credits-item">Received</p>
                    <p className="credits-item">Null</p>
                    <p className="credits-item">30-06-2020</p>
                </div>
                </div>
                </div>
            </div>
        </div>

    }

}

