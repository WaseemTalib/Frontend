import React from 'react';
import {Link} from 'react-router-dom';
export default class extends React.Component {

    render() {
        return <div className={"witem"}>
            <div className={"wleft"}>
                <img className={"wimage"} style={{height: "200px"}} alt={"img"} src={"http://covertopia.com/wp-content/uploads/2015/05/000227_Alt-320x500.jpg"}></img>
            </div>
            <div className={"wcenter"}>
                <span className={"wtitle"}>The Title of Book</span>
                <div style={{color: "red"}}>Genre</div>
                <div className={"wdisc"}>Lorem Ipsum is a good guy. Get away due to Corona oh tera nana.</div>
                   </div>
                <div className={"wright"}>
                <span className={"wtitle mb-3"}>500 Total Pages</span>
                <Link to="/" className={"wbtn btn btn-outline-danger"}>Start Reading</Link>
                </div>
        </div>

    }
}
