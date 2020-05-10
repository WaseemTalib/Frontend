import React, { Component } from 'react';
import Styles from './styles.module.css';
// import video from '../../assets/video.webm';

export default class index extends Component {
    render() {
        return (
            <div className={Styles.header + "col-12 col-lg-12 col-md-12 col-sm-12 pr-4 pl-4"}>
                <video width="100%" height="400" autoplay controls>
                    <source src="../../assets/babyvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
            </div>
        )
    }
}
