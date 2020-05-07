import React, { Component } from 'react';
import './style.css';
import Topics from '../../components/topics';
import { connect } from 'react-redux';
import { getTopics } from '../../redux/actions/topicActions';
import { updateTopics } from '../../redux/actions/userActions';

const logoName = { fontSize: '24px', fontWeight: 'bold', color: '#c0392b', fontFamily: `'Montserrat', sans-serif`, textAlign: 'center' };
const subhead = { fontSize: '18px', fontWeight: '500', color: '#000', fontFamily: `'Montserrat', sans-serif`, marginBottom: '12px' };

class index extends Component {

    selectionCompleted = e => {
        const { id } = this.props.match.params;
        const { updateTopics } = this.props;
        var data = { _id: id, topics: e };
        updateTopics(data);
    }

    componentDidMount() {
        const { getTopics } = this.props;
        getTopics();
    }

    render() {
        const { isLoading, isError, TopicList } = this.props;
        let list = [];

        if (!isLoading && !isError) {
            list = TopicList;
        }

        return (
            <div className="container-fluid p-0" style={{ minHeight: '100vh' }}>
                <div className="drop-shadow"></div>
                <div className="col-lg-10 col-11 t-card">
                    <br />
                    <h6 className="col-12" style={logoName}>GENIVERSITY</h6>
                    <h6 className="col-12 text-lg-left text-center" style={subhead}>What are your interests?</h6>
                    <p></p>
                    {!isLoading && !isError && list && list.length > 0 &&
                        <Topics list={list} selectionCompleted={this.selectionCompleted} />}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        TopicList: state.Topics.data,
        isLoading: state.Topics.isLoading,
        isError: state.Topics.isError
    }
}

export default connect(mapStateToProps, { getTopics, updateTopics })(index);