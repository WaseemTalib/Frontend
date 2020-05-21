import React, { Component } from 'react';
import './style.css';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = { selected: false };
    }

    handleSelect = e => {

        let t = false;
        if (this.state.selected) {
            this.setState({ selected: false });
            t = false;
        } else {
            this.setState({ selected: true });
            t = true;
        }

        let $status = { _id: this.props._id, selected: t };
        this.props.status($status);
    }

    render() {
        return (
            <div className="card" onClick={this.props.topic ? this.handleSelect : ""} style={{ height: "120px", minWidth: "160px", width: "calc(16.5% - 10px)", float: "left", margin: "5px", color: this.props.color || "rgba(255,255,255,1)" }}>
                <img className="card-img-top" src={this.props.image} alt="" style={{ height: "120px", minWidth: "160px", width: "calc(16.5%-10px)"}}/>
                <div className="card-img-overlay">
                    <div className={"btn btn-primary " + ((this.state.selected) ? "d-block" : "d-none")} style={{ float: "right", borderRadius: "50px", width: "40px", height: "40px" }} id={this.props.id}>
                        {this.state.selected && <span className="fa fa-check"></span>}
                    </div>
                    <h6 style={{ marginTop: "calc(100% - 50px)" }}>{this.props.name}</h6>
                </div>
            </div>
        )
    }
}