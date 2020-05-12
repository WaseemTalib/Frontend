import React, { Component } from 'react';
import UserMessage from './UserMessage';
import ListItems from '../Profile/ListItems';
import Message from './Message';
import Header from "../nav"
class Messages extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="message_outer_wrapper">
          <div className="message_inner_wrapper">
            <div className="messages_sidebar_left">
              <div className="message_sidebar_inner">
              <div className="input_wrapper">
                <i class="fa fa-search"></i>
                <input type="search" placeholder="Search Conversation" />
              </div>
              <div className="users_list">
              <UserMessage active={true} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage name="Hello World" time="2d" message="I'm Fine and You?" />
              <UserMessage active={true} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage name="Hello World" time="2d" message="I'm Fine and You?" />
              <UserMessage active={true} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage name="Hello World" time="2d" message="I'm Fine and You?" />
              <UserMessage active={true} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage name="Hello World" time="2d" message="I'm Fine and You?" />
              <UserMessage active={true} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage name="Hello World" time="2d" message="I'm Fine and You?" />
              <UserMessage active={true} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage name="Hello World" time="2d" message="I'm Fine and You?" />
              <UserMessage active={true} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage name="Hello World" time="2d" message="I'm Fine and You?" />
              <UserMessage active={true} name="Hello World" time="1d" message="HELLO WORLD!How ARE YOU???" />
              <UserMessage name="Hello World" time="2d" message="I'm Fine and You?" />
              </div>
              </div>
            </div>
            <div className="messages_content">
              <div className="top_bar_message">
                <div className="icon_message">
                  H
                </div>
                <div className="name_label">
                  Hello World
                </div>
                <div className="icon_right">
                  <i class="fa fa-ellipsis-v"></i>
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
            </div>
            <div className="messages_sidebar_right">
              <div className="icon">H</div>
              <div className="active_name">
                Hello World
              </div>
              <ListItems />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;