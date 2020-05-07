import React, { Component } from 'react';
import '../style.css';
import Styles from './styles.module.css';
import Card from '../card';
const styleActive = { color: '#c23616', borderBottom: '6px solid #c23616', fontWeight: '600', fontSize: '18px', padding: '16px 20px 16px 20px', marginBottom: '0px', cursor: 'pointer' };
const simpleStyle = { color: '#718093', fontWeight: '600', fontSize: '18px', padding: '16px 20px 16px 20px', marginBottom: '0px', cursor: 'pointer' };
export default class index extends Component {
    CARD_LENGTH = 250;
    CL = this.CARD_LENGTH * -1;
    CARD_SPACING = 30;
    state = { id: '', slide: 0 };
    renderStars(stars) {
        return <div>
            <span className={(stars >= 1) ? ' fa-star starChecked fa ratingStar' : (stars > 0) ? ' fa ratingStar fa-star-half starChecked' : 'fa ratingStar fa-star'}></span>
            <span className={(stars >= 2) ? ' fa-star starChecked fa ratingStar' : (stars > 1) ? ' fa ratingStar fa-star-half starChecked' : 'fa ratingStar fa-star'}></span>
            <span className={(stars >= 3) ? ' fa-star starChecked fa ratingStar' : (stars > 2) ? ' fa ratingStar fa-star-half starChecked' : 'fa ratingStar fa-star'}></span>
            <span className={(stars >= 4) ? ' fa-star starChecked fa ratingStar' : (stars > 3) ? ' fa ratingStar fa-star-half starChecked' : 'fa ratingStar fa-star'}></span>
            <span className={(stars >= 5) ? ' fa-star starChecked fa ratingStar' : (stars > 4) ? 'fa ratingStar fa-star-half starChecked' : ' fa ratingStar fa-star'}></span>
        </div>
    }
    renderEBooks(list) {
        var dummy = list || [];
        return dummy.map(i => {

            return <Card {...i}></Card>
        })
    }

    handleRight = () => {
        var move = window.innerWidth - this.CARD_LENGTH - 140;
        move = (move < this.CARD_LENGTH) ? this.CARD_LENGTH + this.CARD_SPACING : move;
        move = (move < 0) ? 0 : move;
        var maxMove = (this.props.bookList.length * this.CARD_LENGTH) / move;
        if (-1 * parseInt(this.state.slide / move) < parseInt(maxMove))
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
        //const { list } = this.props;
        const leftDom = (this.state.slide < 0) ? <div className={Styles.leftWrapper} style={{ position: "absolute", top: "50%" }}>
            <button className={Styles.btnNav} onClick={this.handleLeft}><i className="fa fa-chevron-left" style={{ margin: "15px 18px 15px 12px" }}></i></button>
        </div> : ""
        return (
            <div className={'col-12 ' + Styles.listWrapper} >
                <div className="" style={{ marginBottom: "2rem", display: "block", overflow: "hidden", marginLeft: 'auto', marginRight: 'auto' }}>
                    <h4 className="" style={{ fontWeight: '700', fontSize: '25px', margin: '40px 25px' }}>
                        {this.props.title}</h4>
                    {leftDom}
                    <div className={Styles.list} style={{ whiteSpace: "nowrap", marginLeft: this.state.slide }}>
                        {this.renderEBooks(this.props.bookList)}
                    </div>
                    <div className={Styles.rightWrapper} style={{ position: "absolute", top: "50%", width: "50px", background: "transparent" }}>
                        <button className={Styles.btnNav + " " + Styles.rightbtn} ><i className="fa fa-chevron-right" onClick={this.handleRight} style={{ margin: "15px 12px 15px 18px" }}></i></button>
                    </div>
                </div>

            </div>
        )
    }
}