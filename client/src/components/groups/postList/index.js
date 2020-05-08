import React, { Component, Fragment } from 'react';
import '../style.css';
import PostCard from "../card/PostCard"
class index extends Component {
    render() {
        const { list } = this.props;
        if (list && list.length > 0) {
            return list.map(item => {
                return <PostCard {...item} />
            });
        } else return <Fragment />
    }
}

export default index;