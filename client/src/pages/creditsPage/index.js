import React, { Component } from 'react';
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import Credits from '../../components/credits';
import { connect } from 'react-redux';

class index extends Component {

    render() {
        return (
            <div className="container-fluid p-0" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar active={1} />
               <Credits/>
                <Footer />
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