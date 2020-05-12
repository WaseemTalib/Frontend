import React, { Component } from 'react';
import Navbar from '../../components/nav';
import ProfileSetting from '../../components/profilesetting/index';
import Footer from '../../components/footer';
import { connect } from 'react-redux';

class index extends Component {

    render() {
        const { Auth, profile } = this.props;
        return (
            <div className="p-0" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar active={1} />
                <ProfileSetting auth={Auth} profile={profile} />
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