import React, { Component } from 'react';
import './style.css';
export default class index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="credits-container">
            <h3 className="credits-history">Web Casting</h3>
            <div className="credits-list">
             <p className="credits-item">30$</p>
             <p className="credits-item">Received</p>
             <p className="credits-item">Null</p>
             <p className="credits-item">30-06-2020</p>
         </div>
         </div>
        )

    }

}

