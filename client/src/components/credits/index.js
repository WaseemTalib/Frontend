import React, { Component } from 'react';
import './style.css';
export default class index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="credits">
            <div className="credits-section">
                <div className="credits-container">

                    <table className="credits-table">
                        <tr className="table-parent">

                            <th className="credits-history" rowspan="3">Credit History</th>
                            <th className="credits-headding">Amount</th>
                            <th className="credits-headding">Status</th>
                            <th className="credits-headding">Expiration Date</th>
                            <th className="credits-headding">Valid Form</th>
                        </tr>
                        <tr>
                            <td className="credits-entry" rowspan="3">Credit Card</td>
                            <td className="credits-entry">50$</td>
                            <td className="credits-entry">Received</td>
                            <td className="credits-entry">14/2020</td>
                            <td className="credits-entry">Till 2021</td>
                        </tr>
                    </table>
                </div>
                {/* <div className="credits-container">
                    <p className="credits-history mr-auto">Credit History</p>
                    <div >
                        <ul className="credits-list">
                            <li className="credits-item">Amount</li>
                            <li className="credits-item">Status</li>
                            <li className="credits-item">Valid Form</li>
                            <li className="credits-item">Expiration Date</li>
                        </ul>
                    </div>
                </div>
                <div ></div> */}

            </div>
        </div>

    }

}

