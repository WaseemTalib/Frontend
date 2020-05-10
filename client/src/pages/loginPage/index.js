import React, { Component } from 'react';
import LoginCard from '../../components/loginForm';
import './style.css';
import { Link } from 'react-router-dom';

const style = { minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const navStyle = { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', minHeight: '10vh',marginBottom: "1.5rem", marginLeft: 'auto', marginRight: 'auto' };
const logoName = { fontSize: '28px', fontWeight: 'bold', color: '#c0392b', textAlign: "center", fontFamily: `'Montserrat', sans-serif` };

class index extends Component {

    render() {
        return (
            <div className="container-fluid p-0" style={style}>
                <div className="col-lg-12 col-12" style={navStyle}>
                    <h6 style={logoName}>GENIVERSITY</h6> 
                </div>
                <div className="col-lg-6 col-md-8 col-sm-10 p-0 login-form">
                    <LoginCard />
                </div>
            </div>
        )
    }
}

export default index;