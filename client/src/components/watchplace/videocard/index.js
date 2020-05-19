import React, { Component } from 'react';
import './style.css';
import Playlist from '../playlist'
export default class index extends Component {

    state = {
        isActive: true
    }

    hide = () => {
        this.setState({
            isActive: false
        })
    }
    show = () => {
        this.setState({
            isActive: true
        })
    }
    render() {
        return (
            <div className='col-12'>
                <div className="videocard">
                    <div className="videocard-video">
                        <video width="100%" controls>
                            <source src="../../assets/babyvideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                </video>
                    </div>
                    {this.state.isActive ?
                        <div id="cards" className="videocard-playlist">
                            <div className="videocard-header">
                                <h5 className="videocard-coursetitle">Course Contents</h5>
                                <span className="fa fa-close" onClick={this.hide}></span>
                            </div>
                            <div className="videocard-list">
                                <Playlist />
                                <Playlist />
                                <Playlist />
                                <Playlist />
                                <Playlist />
                                <Playlist />
                                <Playlist />
                                <Playlist />
                            </div>
                        </div>
                        :
                        <div className="videoList hiddenlist" onClick={this.show}>Play List <span className="fa fa-sort-down"></span></div>
                    }
                </div>
            </div>
        )
    }
}