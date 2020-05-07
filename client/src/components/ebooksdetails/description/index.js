import React, { Component } from 'react';
import './style.css';
export default class index extends Component {


    render() {
        return (
            <div className='col-12'>
                <div className="col-11" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <h2 className="description-heading col-lg-7 col-12" style={{ marginTop: '10px' }}>
                        Synosis</h2>
                    </div>
                    <div className="col-11" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <div className="description col-lg-11 col-12" style={{  marginTop: '10px' }}>
                      <p className={"description-p"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.**</p>
                      <p className={"description-p"}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p className={"description-p"}>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                      <p className={"description-p"}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                </div>
            </div>
        )
    }
}