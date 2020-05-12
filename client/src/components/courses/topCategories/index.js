import React, { Component } from 'react';
import '../style.css';
export default class index extends Component {

    renderList(list) {
        return list.map(i => {
            return <div className="" key={i._id}>
                <div className="card cardhover mb-3" style={{ width: "200px", height: "300px" }}>
                    <img className="card-img-top" style={{height: "230px"}} src={i.image} alt="Card image cap" />
                    <div className="card-body">
                        <h6>{i.name}</h6>
                    </div>
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
                    <div className="col-12 d-flex flex-row flex-wrap mt-4 p-0" style={{justifyContent: "space-around"}}>
                        {this.renderList(list)}
                    </div>
                </div>
            </div>
        )
    }
}