import React, { Component } from 'react';
import '../style.css';
export default class index extends Component {

    renderList(list) {
        return list.map( i => {
            return <div className="col-lg-4 col-12" key={i._id}>
                <div className="col-12 course-card p-0">
                    <img src={i.image} alt="category"/>
                    <h6>{i.name}</h6>
                </div>
            </div>
        })
    }
    
    render() {
        const { list } = this.props;
        return (
            <div className='col-12'>
                <div className="col-11" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <h4 className="col-lg-7 col-12" style={{ fontWeight: '700', fontSize: '21px', marginTop: '50px' }}>
                        Top Categories</h4>
                    <div className="col-12 d-flex flex-row justify-content-start flex-wrap mt-4 p-0">
                        {this.renderList(list)}
                    </div>
                </div>
            </div>
        )
    }
}