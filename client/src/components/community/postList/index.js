import React, { Component } from 'react';
import '../style.css';
import PostCard from "../../card/PostCard";
import { getFeedById } from '../../../redux/actions/feedActions';
import { connect } from 'react-redux';

class index extends Component {

    onhandleFeed = (e, _id) => {
        this.props.getFeedById(_id);
    }

    render() {
        const { list } = this.props;
        return list && list.length > 0 && list.map(item => {
            return <PostCard item={item} handleFeed={this.onhandleFeed} />
        });
    }
}

export default connect(null, { getFeedById })(index);