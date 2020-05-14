import React, { Component } from 'react';
import './style.css';
import Playlist from '../playlist'
export default class index extends Component {


    render() {
        return (
            <div className="course-content">
                <div className="course-content-playlist">
                    <div className="course-content-main-heading">
                        <h5 className="course-content-coursetitle">Course Contents</h5>
                        <span className="course-content-lecture" >36 Lectures</span>
                        <span className="course-content-time" >01:34:40</span>

                    </div>
                    <Playlist />
                    <Playlist />
                    <Playlist />
                </div>

            </div>
        )
    }
}