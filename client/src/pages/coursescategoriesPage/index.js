import React, { Component } from 'react';
import Navbar from '../../components/nav';
import { connect } from 'react-redux';
import CourseCard from '../../components/courses/courseList/CourseCard';
import EbookCard from '../../components/ebooks/card';
import Footer from '../../components/footer';
import CourseHeader from "../../components/courses/header"
import EbookHeader from "../../components/ebooks/header"
class index extends Component {
    state={
        index: 0
    }
    renderCards = (list)=>{
        const ebook = {
            image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512156631l/35379976._SY475_.jpg",
            title:"The Fire Heart Chronicles",
            writer:"abc",
            id:1,
            price:"$25",
            star:4.2}
        const myList = list.slice(this.state.index,this.state.index+12)

        return myList.map((el, i) => <div className="col-lg-3 mb-3 category_card category_card_details"> {this.props.course ? <CourseCard el={el} style={ i%4 >= 3 ? {right: "100%"} : {left:`100%`}}  /> : <EbookCard {...ebook} />} </div>)
    }
    renderPagination = (list)=>{
        const pages = Math.ceil(list.length / 12);
        const array = [];
        for (let i = 0; i < pages; i++) {
            array.push(<span onClick={()=>this.setState({index: i*12})} style={{border: "1px solid lightgrey", padding: "1rem", marginRight: "10px",color: this.state.index/12 === i ? "white" : "" ,backgroundColor: this.state.index/12 === i ? "red" : ""}}> {i+1} </span>)
        }
        return array;
    }
    render() {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, "Adeeb", 4, 5,1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5,1, 2, 3, 4, 5, 6, 7, 8, 9];
        return <div>
            <Navbar active={this.props.course ? 2 : 3} />
            {this.props.course ? <CourseHeader /> : <EbookHeader/>}
            <div className="container-fluid" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
            <h4 className="" style={{ fontWeight: '700', fontSize: '25px', margin: '20px 25px' }}> Computer {this.props.course ? "Courses" : "Genres"} </h4>
            <hr style={{margin: "0 1rem 2rem 1rem"}} />
                <div className="row mb-3">
                    {this.renderCards(list)}
                </div>
               <div className="d-flex align-items-center justify-content-center mb-3">
               {(this.state.index > 0) ? 
               <span onClick={()=> this.setState({index:   this.state.index-12})} style={{border: "1px solid lightgrey", padding: "1rem", marginRight: "10px"}}><i className="fa fa-angle-double-left"></i></span>
               : ""}
               {this.renderPagination(list)}
               {this.state.index+12 < list.length ? <span onClick={()=> this.setState({index: this.state.index+12})} style={{border: "1px solid lightgrey", padding: "1rem"}}><i className="fa fa-angle-double-right"></i></span> : ""}
               </div>
                <Footer />
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        Auth: state.Auth.auth,
        profile: state.Profile.data,
        isError: state.Profile.isError,
        RegisterFeed: state.RegFeed,
        TopicList: state.Topics.data
    }
}

export default connect(mapStateToProps)(index);;