import React, { Component } from 'react';
import './style.css';
import Item from './item'
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
                <div className="credits-box">
                    <div className="credits-container-heading">
                        <h3 className="credits-history-heading">Credit History</h3>
                        <div className="credits-list">
                            <p className="credits-item-heading">Amount</p>
                            <p className="credits-item-heading">Status</p>
                            <p className="credits-item-heading">Valid Form</p>
                            <p className="credits-item-heading">Expiration Date</p>
                        </div>
                    </div>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                </div>
            </div>
        </div>

    }

}

