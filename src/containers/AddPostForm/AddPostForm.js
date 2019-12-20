import React, { Fragment } from 'react';
import NavBar from '../../components/UI/NavBar/NavBar';
import PostForm from '../../components/PostForm/PostForm';

const AddPostForm = (props) => {
  return (
    <Fragment>
      <NavBar/>
      <div className="container">
        <h2 className='pt-4 text-center'>ADD New Post</h2>
        <PostForm
          history = {props.history}
          action='add'
        />
      </div>
    </Fragment>
  );
};

export default AddPostForm;