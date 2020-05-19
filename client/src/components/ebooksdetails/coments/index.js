import React, { Component } from 'react';
import './style.css';
import Rating from '../../ebooks/rating';
export default class index extends Component {


    render() {
        return (
            <div className='coment-section col-12'>

                <div className="col-11" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <h3 className="coment-name col-lg-7 col-12" style={{ marginTop: '10px' }}>
                        Reviews</h3>
                        <hr/>
                    <h4 className="coment-name col-lg-7 col-12" style={{ marginTop: '10px' }}>
                        Donald Trump</h4>
                    <Rating stars={4} ></Rating>
                </div>
                <div className="col-11" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <div className="description col-lg-6 col-12" style={{ marginTop: '10px' }}>
                        <p className={"description-p"}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='coment-button col-12'>

                    <button className={"btn btn-outline-danger learnmore"}>
                        Learn More
                     </button>

                    </div>
                </div>
                </div>
            </div>
        )
    }
}