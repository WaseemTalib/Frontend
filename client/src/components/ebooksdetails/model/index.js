import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const inputStyle = { padding: '24px', outline: 'none !important', fontFamily: `''Montserrat', sans-serif`, boxShadow: 'none !important', fontSize: '16px', marginTop: '12px' };
const btnStyle = { borderRadius: '10px', marginTop: '16px', width: '35%' };


export default class index extends Component {

    render() {

        return (

            <section class="popup" id="popup">
                <div class="popup__box">
                    <form className="col-lg-12 col-md-12 col-12 login-card">
                        <a href="#tours" id={"close"} href="#purchase"><span className={"fa fa-close"} htmlFor={"close"} style={{ float: "right", fontSize: "1.5rem", color: "rgb(192, 57, 43)" }}></span></a>

                        <h3 className="mb-5" style={{ color: "rgb(192, 57, 43)" }}>Payment for Your Precious Book</h3>

                        <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                            <input type="number" className="form-control inputStyle" name='email'
                                placeholder="Credit Card Number" required />
                        </div>
                        <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                            <input type="text" className="form-control inputStyle" name='password'
                                placeholder="Card Holder" required />
                        </div>
                        <div className={"credit-info"}>
                            <select name="month" className="mr-2 form-control" id="month">
                                <option value="" >Select Month</option>
                                <option value="0">January</option>
                                <option value="1">Febuary</option>
                                <option value="2">March</option>
                                <option value="3">April</option>
                                <option value="4">May</option>
                                <option value="5">June</option>
                                <option value="6">July</option>
                                <option value="7">August</option>
                                <option value="8">September</option>
                                <option value="9">October</option>
                                <option value="10">November</option>
                                <option value="11">December</option>
                            </select>
                            <select name="year" className="form-control" id="year">
                                <option value="" >Select Year</option>
                                <option value="0">2015</option>
                                <option value="1">2016</option>
                                <option value="2">2017</option>
                                <option value="3">2018</option>
                                <option value="4">2019</option>
                                <option value="5">2020</option>
                                <option value="6">2021</option>
                                <option value="7">2022</option>
                                <option value="8">2023</option>
                                <option value="9">2024</option>
                                <option value="10">2025</option>
                                <option value="11">2026</option>
                            </select>
                        </div>
                        <div className="input-group cvc mb-3" style={{ marginTop: '12px' }}>
                                <input type="number" className="form-control inputStyle" name='password'
                                    placeholder="CVC" required />
                            </div>
                        <div className={"buttons"}>
                            <Link to="/" className="btn btn-outline-danger pt-3 pb-3" type='submit' style={btnStyle}>
                                Pay Now
                        </Link>
                        </div>
                    </form>
                </div>
            </section>



        )
    }
}
