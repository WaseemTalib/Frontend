import React from 'react';
import Styles from './styles.module.css';
import Icons from '../icons';
import { Link } from 'react-router-dom';

export default class extends React.Component {
    render() {
        return <React.Fragment>
            <div className={'footer-grid'}>
                <div className={Styles.footer + ' row'}>
                    <div className={'col-lg-3 col-sm-6'}  style={{ padding: '25px', marginBottom: "1rem", textAlign: "center" }}>
                        <span className={Styles.aG}>GENIVERSITY</span>
                        <p className={Styles.aP}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        <button className={Styles.signUp}>Sign Up</button>
                    </div>
                    <div className={' col-lg-3 col-sm-6'} style={{textAlign: "center" }} >
                        <ul className={Styles.list} >
                            <li className={Styles.aG}><Link to='' className={Styles.lItem}>Resource</Link></li>
                            <li><Link to='' className={Styles.lItem}>Contact US</Link></li>
                            <li><Link to='' className={Styles.lItem}>Privacy Policy</Link></li>
                            <li><Link to='' className={Styles.lItem}>Faqs</Link></li>
                        </ul>
                    </div>
                    <div className={' col-lg-3 col-sm-6'} style={{textAlign: "center" }}>
                        <ul className={Styles.list} >
                            <li className={Styles.aG}><Link to='' className={Styles.lItem}>Company</Link></li>
                            <li><Link to='' className={Styles.lItem}>About US</Link></li>
                            <li><Link to='' className={Styles.lItem}>Geniversity</Link></li>
                            <li><Link to='' className={Styles.lItem}>In the News</Link></li>
                            <li><Link to='' className={Styles.lItem}>Videos</Link></li>
                            <li><Link to='' className={Styles.lItem}>Careers</Link></li>
                        </ul>
                    </div>
                    <div className={' col-lg-3 col-sm-6'} style={{textAlign: "center" }}>
                        <ul className={Styles.list} >
                            <li className={Styles.aG}><Link to='' className={Styles.lItem}>Connect</Link></li>
                            <li><Link to='' className={Styles.lItem}>Facebook</Link></li>
                            <li><Link to='' className={Styles.lItem}>Twitter</Link></li>
                            <li><Link to='' className={Styles.lItem}>Instagram</Link></li>
                        </ul>
                    </div>
                <div className={'col-lg-12 col-12'} style={{ padding: "0 !important" }}>
                    <div className={Styles.apfc}>
                        <div className={Styles.appBanner}><Icons type="android"></Icons></div>
                        <div className={Styles.appBanner}><Icons type="ios"></Icons></div>
                        <span className={Styles.copy}>&copy; 2015-2020 ginversity Corporation. All Right Reserved 2020</span>
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    }
}