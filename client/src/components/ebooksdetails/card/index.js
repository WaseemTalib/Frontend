import React from 'react';
import Rating from '../rating';
import './styles.css';
import {Link} from 'react-router-dom';
import Model from '../model';

export default class extends React.Component {
    render() {
        return <div className={"details d-flex" }>
           <div className={"two-cols d-flex mr-auto"}>
            <div className={"left p-5"}>
                <img src={"http://covertopia.com/wp-content/uploads/2015/05/000227_Alt-320x500.jpg"} className={"left-image br-3"} style={{ }} alt="EBook" />
            </div>
            <div className={"center justify-content-center d-flex flex-column"}>
           <span className={"title m-0 p-0"}>
                {"This Props Title"}
                </span>
                <span className={"writer mb-3"}>
                {"by " + this.props.writer}
                </span>
                <div className="mb-3 d-flex flex-row justify-content-between align-items-center" style={{ padding: "0px 5px" }}>
                    <Rating stars={this.props.star} ></Rating>
                </div>
                <div className={"btninline d-flex mb-3"}>
                    <Link to={"/mypurchases"} className={"btn btn-outline-danger mr-3 btnBuy"}>
                        Add to My Purchase
                     </Link>
                    <a href={"#popup"} className={"btn btn-outline-danger btnBuy"}>
                        Buy Now
                    </a>
                </div>
                <div className={"appinfo d-flex p-3"}>
                    <img src={"https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg"} className={"right-image"} style={{ width: "7rem" }} alt="EBook" />
                    <div className={"appinfotext d-flex justify-content-around flex-column"}>
                        <span>Read on Every Device</span>
                        <span>Downlad Our App</span>
                    </div>
                </div>
                </div>
            </div>
            <div className={"right d-flex flex-column justify-content-center"}>
                <h3 className={"right-heading pb-4"}>Details of Book</h3>
                <span className={"right-p d-block pl-3 pb-3"}><span className="fa fa-file mr-4"></span> E-Books1293 Pages</span>
                <span className={"right-p d-block pl-3 pb-3"}><span className="fa fa-behance mr-4"></span>351 Total words</span>
                <span className={"right-p d-block pl-3 pb-3"}><span className="fa fa-clock-o mr-4"></span> 28-30 Hours Total Read</span>
                <span className={"right-p d-block pl-3 pb-3"}><span className="fa fa-language mr-4"></span> English</span>
            </div>
        <Model></Model>
        </div>
    }
}