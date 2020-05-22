import React from 'react';
import { Link } from 'react-router-dom';
export default class extends React.Component {

    render() {
        return <div style={{ position: "relative", margin: "0", padding: "2rem 5rem", backgroundColor: "#f7f7f7" }}>

            <div style={{ margin: "0 auto", display: "flex", justifyContent: "center" }}>
                <img className={"wimage"} style={{ height: "90vh", width: "70%", marginRight: ".5rem" }} alt={"img"} src={"https://images-na.ssl-images-amazon.com/images/I/91QDpg7q7tL._SL1500_.jpg"}></img>
            </div>
            <div style={{ margin: "2rem 0", textAlign: "center" }}>
                <span style={{ border: "1px solid gray", margin: "0 10px", padding: ".5rem", borderRadius: "3px" }}><i className="fa fa-book"></i></span>
                <span style={{ border: "1px solid gray", margin: "0 10px", padding: ".5rem", borderRadius: "3px" }}><i class="fa fa-book"></i></span>
                <span style={{ border: "1px solid gray", margin: "0 10px", padding: ".5rem", borderRadius: "3px" }}><i className="fa fa-window-maximize"></i></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "1.5rem", marginTop: "3rem" }}>
                <div>
                    <h2 className="description-heading col-lg-7 col-12" style={{display: "inline"}} >Title: </h2>
                    <span style={{ marginRight: "0" }}> Lord of the Rings</span>
                </div>
                <div>
                    <h2 className="description-heading col-lg-7 col-12" style={{display: "inline"}} >Author: </h2>
                    <span style={{ marginRight: "0" }}>Adeeb Ahmad </span>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <h2 className="description-heading col-lg-7 col-12" style={{display: "inline"}} >Synosis: </h2>
                <span style={{ marginRight: "0" }}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia a provident veniam! Delectus.</span>
            </div>
         </div>

    }
}
