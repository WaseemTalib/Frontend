import React, { Component } from 'react';
import '../style.css';
import User from '../../../assets/img_avatar.png';

const styleActive = { color: '#c23616', borderBottom: '6px solid #c23616', fontWeight: '600', fontSize: '18px', padding: '16px 20px 16px 20px', marginBottom: '0px', cursor: 'pointer' };
const simpleStyle = { color: '#718093', fontWeight: '600', fontSize: '18px', padding: '16px 20px 16px 20px', marginBottom: '0px', cursor: 'pointer' };
export default class index extends Component {

    state = { id: '' };

    componentDidMount() {
        const { list } = this.props;
        this.setState({ id: list[0]._id });
    }

    renderList(list) {
        const { id } = this.state;
        return list.map(i => {
            return <h6 key={i._id} style={id === i._id ? styleActive : simpleStyle} onClick={(e) => this.setState({ id: i._id })}>{i.name}</h6>
        })
    }

    renderCourses() {
        var dummy = [1, 2, 3, 4, 5, 6];
        return dummy.map(i => {
            return <div className="col-6 col-lg-2 col-md-4 col-sm-6" key={i}>
                <div className="col-12 course p-0">
                    <img src={"https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg"} className="course-img" alt="course" />
                    <img src={User} className="userImage" alt="user" />
                    <h6 className="static">
                        Programming for
                                </h6>
                    <h6 className='dyna'>
                        Loreum ipsum is simply
                                </h6>
                    <div className="m-2 d-flex flex-row justify-content-between align-items-center p-2">
                        <button className="btn btn-danger">
                            Buy Now
                                    </button>
                        <h6 className="tag mt-2">$45.99</h6>
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
                    <h4 className="col-lg-12 col-12" style={{ fontWeight: '700', fontSize: '21px', marginTop: '50px' }}>
                        Choose from 100,000 video courses with new additions pusblished every month</h4>
                    <div className="col-12 d-flex flex-row justify-content-lg-between justify-content-start flex-wrap mt-4 p-0" style={{ borderBottom: '1px solid #dcdde1' }}>
                        {this.renderList(list)}
                    </div>
                    <div className="col-12 d-flex flex-row flex-wrap mt-4 p-0 c-wrp">
                        {this.renderCourses()}
                        <button className="btn btn-nav"><span className="fa fa-arrow-right"></span></button>
                    </div>
                </div>
            </div>
        )
    }
}