import React from 'react';
import Styles from './styles.module.css';
export default class extends React.Component {

    render() {
        return <div className={Styles.courseCard} >
            <div className={Styles.courseTitle}>My Course</div>

            <div className={Styles.item}>
                <div className={Styles.left}>
                    <img className={Styles.image} alt={"img"} src={this.props.image}></img>
                </div>
                <div className={Styles.center}>
                    <span className={Styles.title}>{this.props.title}</span>
                    <div className={Styles.disc}>{this.props.description}</div>
                    <div className={Styles.del}><i className="fa fa-trash"></i></div>
                </div>
                <div className={Styles.right}>
                    <span>{this.props.price}</span>
                </div>
            </div>
        </div>

    }
}
