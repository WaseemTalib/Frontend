import React, { Component } from 'react';
import '../style.css';
import User from '../../../assets/img_avatar.png';
import Styles from '../../ebooks/ebookList/styles.module.css';
import Style2 from "../../ebooks/card/styles.module.css"
const styleActive = { color: '#c23616', borderBottom: '6px solid #c23616', fontWeight: '600', fontSize: '18px', padding: '16px 20px 16px 20px', marginBottom: '0px', cursor: 'pointer' };
const simpleStyle = { color: '#718093', fontWeight: '600', fontSize: '18px', padding: '16px 20px 16px 20px', marginBottom: '0px', cursor: 'pointer' };
var dummy = [1, 2, 3, 4, 5, 6,2,2,3,5,6,3,2,1,3,4];
export default class index extends Component {

    CARD_LENGTH = 250;
    CL = this.CARD_LENGTH * -1;
    CARD_SPACING = 30;
    state = { id: '', slide: 0 };
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
        return dummy.map(i => {
            return <div className={Style2.card + " course"} key={Math.random()} style={{height: `max-content !important`}}>
                    <img src={"https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg"} className="course-img" alt="course" />
                    <img src={User} className="userImage" alt="user" />
                    <h6 className="static">
                        Programming for
                                </h6>
                    <h6 className='dyna'>
                        Loreum ipsum is simply
                                </h6>
                    <div className="m-2 d-flex flex-row justify-content-between align-items-center p-2">
                        <button className="btn btn-danger">Buy Now</button>
                        <h6 className="tag mt-2">$45.99</h6>
                </div>
            </div>
        })
    }
    handleRight = () => {
        var move = window.innerWidth - this.CARD_LENGTH - this.CARD_SPACING*dummy.length;
        move = (move < this.CARD_LENGTH) ? this.CARD_LENGTH + this.CARD_SPACING : move;
        move = (move < 0) ? 0 : move;
        var maxMove = (dummy.length * this.CARD_LENGTH) / move;
        console.log((-1 * parseInt(this.state.slide / move))+200,maxMove)
        if ((-1 * parseInt(this.state.slide / move)) < parseInt(maxMove))
            this.setState({ slide: this.state.slide - move })
    }
    handleLeft = () => {
        var move = window.innerWidth - this.CARD_LENGTH;

        move = (move < this.CARD_LENGTH) ? this.CARD_LENGTH + this.CARD_SPACING : move;

        move = (move < 0) ? 0 : move;
        if (this.state.slide < 0 && this.state.slide + move <= 0)
            this.setState({ slide: this.state.slide + move })
        else
            this.setState({ slide: 0 })
    }

    render() {
        const { list } = this.props;
        const leftDom = (this.state.slide < 0) ? <div className={Styles.leftWrapper} style={{ position: "absolute", top: "50%",left:0,zIndex: 100 }}>
            <button className={Styles.btnNav} style={{zIndex:100}} onClick={this.handleLeft}><i className="fa fa-chevron-left" style={{ margin: "5px" }}></i></button>
        </div> : "";
        return (
            <div className={'col-12 ' + Styles.listWrapper}>
                <div className="col-12"  style={{overflow: "hidden" }}>
                    <h2 className="col-lg-12 col-12 heading-primary" style={{ fontWeight: '700', marginTop: '50px' }}>
                        {this.props.heading} </h2>
                    <div style={{position: `relative`}}>
                    {leftDom}
                    {/* <div  className={Styles.list}  style={{ borderBottom: '1px solid #dcdde1', whiteSpace: "nowrap", marginLeft: this.state.slide  }}>
                        {this.renderList(list)}
                    </div> */}
                    <div className={Styles.list} style={{ whiteSpace: "nowrap", marginLeft: this.state.slide }}>
                        {this.renderCourses()}
                    </div>
                    <div className={Styles.rightWrapper} style={{ position: "absolute", top: "50%", width: "50px", background: "transparent",right:0 }}>
                        <button className={Styles.btnNav + " " + Styles.rightbtn}  onClick={this.handleRight}  ><i className="fa fa-chevron-right" style={{ margin: "5px",zIndex: 100  }}></i></button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}