import React, { Component } from 'react';

export default class index extends Component {
    render() {
        return (
            <div className="col-12" style={{color: 'white', padding: '80px 30px 80px 30px', backgroundImage: `url('https://static.makeuseof.com/wp-content/uploads/2018/11/dark-wallpapers-994x400.jpg')` }}>
                <div className="col-lg-6 col-12">
                    <h6 style={{ fontWeight: '500', letterSpacing: '2px', fontSize: '30px' }}>FIND RIGHT ANALYTIC COURSE FOR YOU</h6>
                    <h6 style={{ color: '#dcdde1', marginTop: '30px', fontSize:'18px' }}>Advanced Google Analytic Mastery - Advanced Features, Tracking, Reports and Analysis {'&'} Overview of Google Tag Manager</h6>
                    <button className="btn btn-danger mt-4 col-lg-3 col-12" style={{ fontWeight: '600px' }}>
                        Get Started
                    </button>
                </div>
            </div>
        )
    }
}
