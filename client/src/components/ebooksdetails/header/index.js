import React, { Component } from 'react';
import Styles from './styles.module.css'
export default class index extends Component {
    render() {
        return (
            <div className={ Styles.header + " col-12"}>
                <div style={{background:"rgba(0,0,0,0.4)", backgroundImage:"linear-gradient(to right,rgba(0,0,0,0.8), rgba(0,0,0,0.1))",padding: '80px 30px 80px 30px',margin:"0",height:"100%",width:"100%"}}>
                <div className="col-lg-6 col-12">
                    <h6 style={{ fontWeight: '500', letterSpacing: '2px', fontSize: '30px' }}>BOOKS WE'VE BEEN WAITING FOR YOU</h6>
                    <h6 style={{ color: '#dcdde1', marginTop: '30px', fontSize:'18px' }}>A Must read books for those who are passionate about their Work</h6>
                    <button className="btn btn-danger mt-4 col-lg-3 col-12" style={{ fontWeight: '600px' }}>
                        Get Started
                    </button>
                </div>
                </div>
            </div>
        )
    }
}
