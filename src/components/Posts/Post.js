import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import axiosBlog from '../../axiosBlog';
import NavBar from '../UI/NavBar/NavBar';
import Button from '../UI/Button/Button';
import PostForm from '../PostForm/PostForm';

class Post extends Component {

    state = {
      post: null,
    }
  
  async componentDidMount () {
    const id = this.props.match.params.id;
    const response = await axiosBlog.get(`/posts/${id}.json`);
    this.setState({post: response.data});

  }

  postRemoveHandler = async () => {
    const id = this.props.match.params.id;
    await axiosBlog.delete(`/posts/${id}.json`);
    this.props.history.push('/');
  }

  postEditHandler = () => {
    const id =this.props.match.params.id
    this.props.history.location.pathname === `/posts/${id}/edit`
    ? this.props.history.replace(`/posts/${id}/`) 
    : this.props.history.replace(`/posts/${id}/edit`);
  };

  render = () => {
    return this.state.post && (
      <Fragment>
        <NavBar/>
        <div className="container">
          <div className="card my-3">
            <div className="card-header">
              <div className='d-flex justify-content-between'>
                <span>Created on: {this.state.post.date}</span>
                <Button
                    label='x'
                    type='button'
                    addClass=' close'
                    click={this.postRemoveHandler}
                  />
              </div>
            </div>
            <div className="card-body">
              <span>Title: <h5 className="card-title d-inline">{this.state.post.title}</h5></span>
              <hr/>
              <div dangerouslySetInnerHTML={{__html: this.state.post.text}}/>
              <hr/>
              <div className='d-flex flex-column'>
                <Button
                  label='Edit post'
                  type='button'
                  addClass='close'
                  click={this.postEditHandler}
                />
                <Route 
                  path={this.props.match.path + '/edit'}
                  render={(props) => (
                  <Fragment>
                    <span className='p-2'></span>
                    <PostForm
                      title={this.state.post.title}
                      text={this.state.post.text}
                      id={this.props.match.params.id}
                      action='edit'
                      history={this.props.history}
                      />
                    </Fragment>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
};

export default Post;