import React, { Component } from 'react';
import Error from '../../components/error';
import { logOut } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

class index extends Component {
    
    reload = () => {
        window.location.reload();
    }

    signOut = () => {
        const { logOut } = this.props;
        logOut();
    }

    render() {
        return (
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Error reload={this.reload} signOut={this.signOut} />
            </div>
        )
    } 
}

export default connect(null, { logOut })(index);