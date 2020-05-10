import React, { Component } from 'react';
import Navbar from '../../components/nav';
import { connect } from 'react-redux';
import Header from '../../components/coursesdetails/header';
import Card from '../../components/coursesdetails/card';
import Description from '../../components/coursesdetails/description';
import Coments from '../../components/coursesdetails/coments';
import Footer from '../../components/footer';
class index extends Component {
    render() {

        return <div className="container-fluid p-0" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar active={2} />
            <Header />
            <Card />
            <Description />
            <Coments />
            <Footer />
        </div>
    }
}

const mapStateToProps = state => {
    return {
        Auth: state.Auth.auth,
        profile: state.Profile.data,
        isError: state.Profile.isError,
        RegisterFeed: state.RegFeed,
        TopicList: state.Topics.data
    }
}

export default connect(mapStateToProps)(index);