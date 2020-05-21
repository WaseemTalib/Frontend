import React, { Component } from 'react';
import '../style.css';
import Styles from '../../ebooks/ebookList/styles.module.css';
import CourseCard from '../../courses/courseList/CourseCard';

const styleActive = { color: '#c23616', borderBottom: '6px solid #c23616', fontWeight: '600', fontSize: '18px', padding: '16px 20px 16px 20px', marginBottom: '0px', cursor: 'pointer' };
const simpleStyle = { color: '#718093', fontWeight: '600', fontSize: '18px', padding: '16px 20px 16px 20px', marginBottom: '0px', cursor: 'pointer' };
var dummy = ["Hello", "Adeeb", "Ahmad", "Ismail", "Zeeshan", "Waseem","Vely"];
export default class index extends Component {
    state = {
        index: 0,
        width: window.innerWidth,
        cards: 5
    };
    componentDidMount() {
        const { list } = this.props;
        this.setState({ id: list[0]._id });
        window.onresize = this.onResize;
        if(window.innerWidth <= 1240) this.setState({cards: 4})
        if(window.innerWidth <= 1010) this.setState({cards: 3})
        if(window.innerWidth <= 780) this.setState({cards: 2})
        if(window.innerWidth <= 540) this.setState({cards: 1})
    }
    onResize = ()=>{
        this.setState({width: window.innerWidth});
        if(window.innerWidth <= 1240) this.setState({cards: 4})
        if(window.innerWidth <= 1010) this.setState({cards: 3})
        if(window.innerWidth <= 780) this.setState({cards: 2})
        if(window.innerWidth <= 540) this.setState({cards: 1})
    }
    renderList(list) {
        const { id } = this.state;
        return list.map(i => {
            return <h6 key={i._id} style={id === i._id ? styleActive : simpleStyle} onClick={(e) => this.setState({ id: i._id })}>{i.name}</h6>
        })
    }

    renderCourses=(list) => {
        const myList = list.slice(this.state.index,this.state.index + this.state.cards);
        return myList.map((el,i) => {
            return <div className="category_card"><CourseCard el={el} index={i} style={myList.length -1 === i ? {right: "100%"} : {left:`100%`}}  after={myList.length -1 === i ? {left: 0} : {right: 0}} /></div>
        })
    }
    render() {
        const leftDom = (this.state.index > 0) ? <div className={Styles.leftWrapper} style={{ position: "absolute", top: "50%",left:0,zIndex: 100 }}>
            <button className={Styles.btnNav} style={{zIndex:100}} onClick={()=>this.setState({index: this.state.index - this.state.cards})} ><i className="fa fa-chevron-left" style={{ margin: "5px" }}></i></button>
        </div> : "";
        return (
            <div className={'col-12 '}>
                <div className="col-12">
                <h4 className="" style={{ fontWeight: '700', fontSize: '25px', margin: '40px 25px' }}> {this.props.title}</h4>
                <div style={{position: `relative`}}>
                    {leftDom}
                    <div className="col-lg-12">
                        <div className="container-fluid">
                            <div className="row course_list" style={{justifyContent : `space-evenly`}}>
                                {this.renderCourses(dummy)}
                            </div>
                        </div>
                    </div>
                    <div className={Styles.rightWrapper} style={{ position: "absolute", top: "50%", width: "50px", background: "transparent",right:0 }}>
                        {this.state.index+this.state.cards < dummy.length ? <button className={Styles.btnNav + " " + Styles.rightbtn}  onClick={()=>this.setState({index: this.state.index+this.state.cards})}  ><i className="fa fa-chevron-right" style={{ margin: "5px",zIndex: 100  }}></i></button> : ""}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}