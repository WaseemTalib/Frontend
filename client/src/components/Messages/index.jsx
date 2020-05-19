import React, { Component } from 'react';
import UserMessage from './UserMessage';
import ListItems from '../Profile/ListItems';
import Message from './Message';
import Header from "../nav"
import { Link } from 'react-router-dom';
import Footer from "../footer"
class Messages extends Component {
  state={
    width: window.innerWidth
  }
  onClick= (e)=>{
    const target = e.target.dataset.target || e.target.parentNode.dataset.target || e.target.parentNode.parentNode.dataset.target
    const state = e.target.dataset.state || e.target.parentNode.dataset.state || e.target.parentNode.parentNode.dataset.state
    this.refs[target].classList[state]("back_to_view")
  }
  componentDidMount(){
    window.addEventListener("resize",()=> this.setState({width: window.innerWidth}))
  }
  render() {
    return (
      <div>
        <Header />
        <div className="message_outer_wrapper">
          <div className="message_inner_wrapper">
            <div className="messages_sidebar_left">
              <div className="message_sidebar_inner">
              <div className="input_wrapper">
                <i className="fa fa-search"></i>
                <input type="search" placeholder="Search Conversation" />
              </div>
              <div className="users_list">
              <UserMessage onClick={this.onClick} active={true} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage onClick={this.onClick} name="Hello World" time="2d" message="I'm Fine and You?" />
              <UserMessage onClick={this.onClick} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage onClick={this.onClick} name="Hello World" time="45mins" message="I'm Fine and You?" />
              <UserMessage onClick={this.onClick} name="Hello World" time="1s" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage onClick={this.onClick} name="Hello World" time="25d" message="I'm Fine and You?" />
              <UserMessage onClick={this.onClick} name="Hello World" time="1hour" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage onClick={this.onClick} name="Hello World" time="22 hours" message="I'm Fine and You?" />
              <UserMessage onClick={this.onClick} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage onClick={this.onClick} name="Hello World" time="2d" message="I'm Fine and You?" />
              <UserMessage onClick={this.onClick} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage onClick={this.onClick} name="Hello World" time="2d" message="I'm Fine and You?" />
              <UserMessage onClick={this.onClick} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage onClick={this.onClick} name="Hello World" time="2d" message="I'm Fine and You?" />
              <UserMessage onClick={this.onClick} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage onClick={this.onClick} name="Hello World" time="2d" message="I'm Fine and You?" />
              </div>
              </div>
            </div>
            <div className="messages_content" ref="msg_container">
              <div className="messages_inner">
              <div className="top_bar_message">
                {this.state.width <= 1000 ? <i className="fa fa-arrow-left" data-target="msg_container" data-state="remove" style={{position: `absolute`,top: "50px",left: "20px"}} onClick={this.onClick} aria-hidden="true"></i> : ""}
                <div className="reciver" data-state="add" data-target="profile_container" onClick={this.onClick}>
                <div className="icon_message">
                  H
                </div>
                <div className="name_label">
                  Hello World
                </div>
                </div>
                <div className="icon_right">
                  <i className="fa fa-ellipsis-v"></i>
                </div>
              </div>
              <div className="messages">
                <Message className="incoming" message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dicta iure tempora consequuntur cum, alias rem facilis asperiores nobis officiis incidunt voluptas dolores, a harum modi est? Aliquam, porro. Dignissimos!"/>
                <Message className="outgoing" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum praesentium, quas aut ullam blanditiis similique commodi! Id perspiciatis minus eum error, delectus ducimus, placeat quas nam modi, odit laborum veniam?"/>
                <Message className="incoming" message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dicta iure tempora consequuntur cum, alias rem facilis asperiores nobis officiis incidunt voluptas dolores, a harum modi est? Aliquam, porro. Dignissimos!"/>
                <Message className="outgoing" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum praesentium, quas aut ullam blanditiis similique commodi! Id perspiciatis minus eum error, delectus ducimus, placeat quas nam modi, odit laborum veniam?"/>
                <Message className="incoming" message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dicta iure tempora consequuntur cum, alias rem facilis asperiores nobis officiis incidunt voluptas dolores, a harum modi est? Aliquam, porro. Dignissimos!"/>
                <Message className="outgoing" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum praesentium, quas aut ullam blanditiis similique commodi! Id perspiciatis minus eum error, delectus ducimus, placeat quas nam modi, odit laborum veniam?"/>
                <Message className="incoming" message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dicta iure tempora consequuntur cum, alias rem facilis asperiores nobis officiis incidunt voluptas dolores, a harum modi est? Aliquam, porro. Dignissimos!"/>
                <Message className="outgoing" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum praesentium, quas aut ullam blanditiis similique commodi! Id perspiciatis minus eum error, delectus ducimus, placeat quas nam modi, odit laborum veniam?"/>
                <Message className="incoming" message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dicta iure tempora consequuntur cum, alias rem facilis asperiores nobis officiis incidunt voluptas dolores, a harum modi est? Aliquam, porro. Dignissimos!"/>
                <Message className="outgoing" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum praesentium, quas aut ullam blanditiis similique commodi! Id perspiciatis minus eum error, delectus ducimus, placeat quas nam modi, odit laborum veniam?"/>
                <Message className="incoming" message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dicta iure tempora consequuntur cum, alias rem facilis asperiores nobis officiis incidunt voluptas dolores, a harum modi est? Aliquam, porro. Dignissimos!"/>
                <Message className="outgoing" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum praesentium, quas aut ullam blanditiis similique commodi! Id perspiciatis minus eum error, delectus ducimus, placeat quas nam modi, odit laborum veniam?"/>
                <Message className="incoming" message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dicta iure tempora consequuntur cum, alias rem facilis asperiores nobis officiis incidunt voluptas dolores, a harum modi est? Aliquam, porro. Dignissimos!"/>
                <Message className="outgoing" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum praesentium, quas aut ullam blanditiis similique commodi! Id perspiciatis minus eum error, delectus ducimus, placeat quas nam modi, odit laborum veniam?"/>
                <Message className="incoming" message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dicta iure tempora consequuntur cum, alias rem facilis asperiores nobis officiis incidunt voluptas dolores, a harum modi est? Aliquam, porro. Dignissimos!"/>
                <Message className="outgoing" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum praesentium, quas aut ullam blanditiis similique commodi! Id perspiciatis minus eum error, delectus ducimus, placeat quas nam modi, odit laborum veniam?"/>
              </div>
              <div className="input_wrapper_messages">
                <button><i className="fa fa-paperclip" aria-hidden="true"></i></button>
                <input type="text"/>
                <button><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
              </div>
              </div>
            </div>
            <div className="messages_sidebar_right" ref="profile_container">
            <div className="message_sidebar_inner">
            {this.state.width <= 1000 ? <i className="fa fa-arrow-left"  data-target="profile_container" onClick={this.onClick} data-state="remove" style={{position: `absolute`,top: "20px",left: "20px"}} aria-hidden="true"></i> : ""}
            <div className="reciver_details">
              <div className="icon">H</div>
                <div className="active_name">
                  Hello World
                </div>
              </div>
              <h4>Personal Info</h4>
              <ListItems />
              <Link to="/profile" className="profile_btn">View Profile</Link>
            </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Messages;