import React, { Component } from 'react';
import './style.css';
import Card from '../courseCard';

export default class index extends Component {


    render() {
        return (
            <div className="center2">
                <div className="communities">
                    <span className="communities-heading">Communities You're Following</span>

                    <div className="cards">
                 
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    </div>
                </div>

            </div>
        )
    }
}