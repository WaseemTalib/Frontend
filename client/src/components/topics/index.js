import React, { Component } from 'react';
import Card from '../card'

class index extends Component {

    constructor(props) {
        super(props);
        this.state = { list: props.list, selected: [] };
    }

    updateStatus = (st) => {
        let i = this.state.selected.indexOf(st._id);
        if (st.selected) {
            let l = this.state.selected
            l.push(st._id)
            this.setState({ selected: l })
        } else {
            let l = this.state.selected
            l.splice(i, 1)
            this.setState({ selected: l })
        }
    }

    completed = () => {
        this.props.selectionCompleted(this.state.selected)
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-12 hide-scroll">
                    <div className="col-12 p-0 d-flex flex-lg-row flex-column flex-lg-wrap"></div>
                    {this.state.list.map(e => <Card topic={true} {...e} key={e._id} status={this.updateStatus}></Card>)}
                </div>
                <div className="col-12 p-0 d-flex flex-row justify-content-end">
                    <div onClick={this.completed} style={{ marginBottom:'12px',marginTop:'12px'}} className={"btn btn-primary " + (this.state.selected.length < 3 && "disabled")}>Let's Go</div>
                </div>
            </React.Fragment>
        );
    }
}

export default index;