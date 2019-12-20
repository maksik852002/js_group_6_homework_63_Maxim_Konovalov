import React from 'react';
import {NavLink} from 'react-router-dom';

const Posts = props => (
  <div className="card my-3">
    <div className="card-header">
      Created on: {props.date}
    </div>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <NavLink className='btn btn-secondary'  to = {`/posts/${props.id}`}>Read more>></NavLink>
    </div>
  </div>
);

export default Posts;