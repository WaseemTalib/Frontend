import React, { Component } from 'react';
import Header from '../ebooks/header';
import Read from './read';

export default class index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="watchcourse" style={{ backgroundColor: "rgb(226, 225, 225)" }}>
            <Header />
            <Read />
            <Read />
        </div>

    }

}

