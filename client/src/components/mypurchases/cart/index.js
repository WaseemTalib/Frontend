import React from 'react';
import Styles from './styles.module.css';
import Item from '../item';
import Purchase from '../purchase';
import Model from '../model';

export default class extends React.Component {
    state = {
        btn1: true,
        btn2: false
    }
    render() {
        return <div>
        <div className={'col-12 ' + Styles.cart}>
            <div className={Styles.header}>
                <div className={Styles.title}>Your Cart</div>
                <div className={Styles.mdisc}>You have {2} items in your Cart</div>
            </div>
           <div className={Styles.cartAlign}>
            <div className="col-12 col-lg-8">
            <Item id={1} title="ا ب پ" description="describe me well" price="$80" image="https://picserio.com/data/out/218/cute-kitty-wallpapers_4320821.jpg"></Item>
            <Item id={1} title="abc" description="describe me well" price="$40" image="https://picserio.com/data/out/218/cute-kitty-wallpapers_4320821.jpg"></Item>
            </div>
            <div className="col-12 col-lg-4">
            <div className={Styles.checkOut}>
                <div className={Styles.flex}>
                    <div className={Styles.coText}>
                        <div className={Styles.title}>Order Sub-Total</div>
                        <div className={Styles.mdisc}>You have {2} items in your Cart</div>
                    </div>
                    <div className={Styles.coPrice}>{"$80"}</div>
                </div>
                <br></br>
                <a href="#popup" style={{color: "#fff", textDecoration: "none"}} className={Styles.btnCheckOut}>CheckOut</a>
            </div>
            </div>
            </div>
                <div className={Styles.history}>
                <div className={Styles.header}>
                    <div className={Styles.title}>Your Purchase History</div>
                    <div className={Styles.mdisc}>You have {2} items in your History</div>
                <div className={Styles.swtichButtons}>
                <button onClick={()=> this.setState({btn1: true,btn2:false})} className={`${Styles.button} ${this.state.btn1 ? "active_btn" : ""}`} style={{marginRight: ".5rem"}}>My Courses</button>
                <button onClick={()=> this.setState({btn1: false,btn2:true})} className={`${Styles.button1} ${this.state.btn2 ? "active_btn" : ""}`}>My Books</button>
                </div>
                </div>
                {this.state.btn1 ?  
                <Purchase id={1} title="ا ب پ" coursetitle="My Courses"  description="describe me well" price="$40" image="https://picserio.com/data/out/218/cute-kitty-wallpapers_4320821.jpg"></Purchase>
                :
                <Purchase id={1} title="abc" coursetitle="My Courses" description="describe me well" price="$80" image="https://picserio.com/data/out/218/cute-kitty-wallpapers_4320821.jpg"></Purchase>
                }
                </div>
            </div>
            <Model></Model>
            
            </div>

    }
}
