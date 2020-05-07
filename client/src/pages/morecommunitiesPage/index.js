import React, { Component } from 'react';
import Navbar from '../../components/nav';
import Community from '../../components/morecommunities';
import Footer from '../../components/footer';
import { connect } from 'react-redux';

class index extends Component {

    render() {
        const { Auth, profile } = this.props;
        return (
            <div className="p-0" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar active={1} />
                <Community auth={Auth} profile={profile} />
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Auth: state.Auth.auth,
        profile: state.Profile.data,
        isError: state.Profile.isError
    }
}

export default connect(mapStateToProps)(index);;