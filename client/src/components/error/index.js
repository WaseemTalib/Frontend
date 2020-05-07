import React from 'react';
import Styles from './index.module.css'
export default function (props) {
    return (
        <React.Fragment>
            <div className={Styles.geniTag}>GENIVERSITY</div>
            <h4>Ooops! some error ocured please try again</h4>
            <div>
                <button className={Styles.btn} onClick={props.reload}>Reload</button>
                <button className={Styles.btn} onClick={props.signOut}>Sign Out</button>
            </div>
        </React.Fragment>
    )
}