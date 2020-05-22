import React, { Component } from 'react';
import Book from './book';
import Navbar from '../nav';
export default class index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="watchcourse">
    <Navbar/>
    <Book/>
        </div>

    }

}

