import React from 'react';
import Styles from './styles.module.css';
import Item from '../item';
import Purchase from '../purchase';
import Model from '../model';

export default class extends React.Component {

    render() {
        return <div>
        <div className={'col-12 ' + Styles.cart}>
            <div className={Styles.header}>
                <div className={Styles.title}>Your Cart</div>
                <div className={Styles.mdisc}>You have {2} items in your Cart</div>
            </div>
            <Item id={1} title="abc" description="describe me well" price="$40" image="https://www.freecodecamp.org/news/content/images/2020/03/gpython.jpg"></Item>
            <Item id={1} title="abc" description="describe me well" price="$40" image="https://www.freecodecamp.org/news/content/images/2020/03/gpython.jpg"></Item>
            
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
                <div className={Styles.history}>
                <div className={Styles.header}>
                    <div className={Styles.title}>Your Purchase History</div>
                    <div className={Styles.mdisc}>You have {2} items in your History</div>
                <div className={Styles.swtichButtons}>
                <button className={Styles.button} style={{marginRight: ".5rem"}}>My Courses</button>
                <button className={Styles.button1}>My Books</button>
                </div>
                </div>
                <Purchase id={1} title="abc" description="describe me well" price="$40" image="https://www.freecodecamp.org/news/content/images/2020/03/gpython.jpg"></Purchase>
                <Purchase id={1} title="abc" description="describe me well" price="$40" image="https://www.freecodecamp.org/news/content/images/2020/03/gpython.jpg"></Purchase>
            </div>
            </div>
            <Model></Model>
            
            </div>

    }
}
