import React from "react";
import { useState } from "react";

const InputComment = (props) => {
  const [comment, setComment] = useState('');
  return (
    <div className="comment_input_wrapper">
      <input type="text" placeholder={props.placeholder} value={comment} onChange={e => setComment(e.target.value)} />
      <button className="fa fa-paper-plane" onClick={e => props.onhandleComment(e,comment)}></button>
    </div>
  );
};

export default InputComment;
