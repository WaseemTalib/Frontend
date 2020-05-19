import React from 'react';

export default class extends React.Component{
    render(){
        const stars = this.props.stars
    return <div style={{fontSize: `1rem`}}>
        <span className={(stars>=1)?' fa-star starChecked fa ratingStar':(stars>0)?' fa ratingStar fa-star-half starChecked':'fa ratingStar fa-star'}></span>
        <span className={(stars>=2)?' fa-star starChecked fa ratingStar':(stars>1)?' fa ratingStar fa-star-half starChecked':'fa ratingStar fa-star'}></span>
        <span className={(stars>=3)?' fa-star starChecked fa ratingStar':(stars>2)?' fa ratingStar fa-star-half starChecked':'fa ratingStar fa-star'}></span>
        <span className={(stars>=4)?' fa-star starChecked fa ratingStar':(stars>3)?' fa ratingStar fa-star-half starChecked':'fa ratingStar fa-star'}></span>
        <span className={(stars>=5)?' fa-star starChecked fa ratingStar':(stars>4)?' fa ratingStar fa-star-half starChecked':' fa ratingStar fa-star'}></span>
        </div>
    }
}