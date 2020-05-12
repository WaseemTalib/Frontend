import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
export default class extends React.Component {

    render() {
        return <div className={"witem"}>
            <div className={"wleft"}>
                <img className={"wimage"} alt={"img"} src={"https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg"}></img>
            </div>
            <div className={"wcenter"}>
                <span className={"wtitle"}>Introduction to Fixed-Wing Drone Design</span>
                <div className={"wdisc"}>Lorem Ipsum is a good guy. he wakes up late in the morning. Get away due to Corona oh tera nana.</div>
                   </div>
                <div className={"wright"}>
                <span className={"wtitle"}>0 to 20 Completed</span>
                <div className={"wdiscs"}>Finish Course to get Certified</div>
                <Link to="/watchplace" className={"wbtn btn btn-outline-danger"}>Start Watching</Link>
                </div>
        </div>

    }
}
