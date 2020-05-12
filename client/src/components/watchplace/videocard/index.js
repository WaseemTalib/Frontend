import React, { Component } from 'react';
import './style.css';
import Playlist from '../playlist'
export default class index extends Component {


    render() {
        return (
            <div className='col-12'>
            <div className="videocard">
                <div className="videocard-video">
                    <video width="100%" height="700" autoplay controls>
                        <source src="../../assets/babyvideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                </div>
                <div className="videocard-playlist">
                    <div className="videocard-header">
                        <h5 className="videocard-coursetitle">Course Contents</h5>
                        <span className="fa fa-close"></span>
                    </div>
                    <div className="videocard-list">
                        <Playlist />
                        <Playlist />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}