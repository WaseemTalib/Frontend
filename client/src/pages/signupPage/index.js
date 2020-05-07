import React, { Component } from 'react';
import SignupCard from '../../components/signupForm';
import './style.css';

const navStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' };
const logoName = { fontSize: '38px', fontWeight: 'bold', color: '#c0392b', fontFamily: `'Montserrat', sans-serif` };

class index extends Component {
    state = {};

    render() {
        return (
            <div className="container-fluid justify-content-center p-0 signup-form">
                <div className="col-11 p-0" style={navStyle}>
                    <h6 style={logoName}>GENIVERSITY</h6>
                </div>
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <SignupCard />
                </div>
            </div>
        )
    }
}

export default index;