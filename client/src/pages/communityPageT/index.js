import React, { Component } from 'react';
import Navbar from '../../components/nav';
import Community from '../../components/community';
import { connect } from 'react-redux';

class index extends Component {

    render() {
        const { Auth, profile } = this.props;
        const { tId } = this.props.match.params;
        return (
            <div className="container-fluid p-0" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar active={1} />
                <Community auth={Auth} profile={profile} tId={tId} />
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