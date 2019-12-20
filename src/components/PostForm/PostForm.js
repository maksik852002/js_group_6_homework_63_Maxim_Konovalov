import React, { Component, Fragment } from 'react';
import axiosBlog from '../../axiosBlog';
import Button from '../UI/Button/Button';
import Editor from '../UI/Editor/Editor';

class PostForm extends Component  {
  constructor(props) {
    super(props);
    this.textHandleChanged = this.textHandleChanged.bind(this)
    this.state = {
      title:'',
      text:'',
      loading:false,
    };
  }
  
  componentDidMount () {
    this.props.action==='edit' && this.setState({title: this.props.title, text: this.props.text})
  }

  titleHandleChanged = e => this.setState({title: e.target.value});

  textHandleChanged = content => this.setState({text: content});
    
  postHandler = async e => {
    e.preventDefault();

    const posts = {
      date: Date(),
      title:this.state.title,
      text:this.state.text,
    };

    this.setState({loading:true})
    this.props.action==='add' && await axiosBlog.post('posts.json', posts);
    this.props.action==='edit' && await axiosBlog.patch(`/posts/${this.props.id}.json`, posts);
    this.setState({loading:false})
    this.props.history.push('/')
  };

  render = () => {
    console.log(this.state)
    return (
      <form onSubmit={this.postHandler} className='border border secondary p-3'>
        <div className="form-group">
          <label htmlFor="titleInput">Title</label>
          <input onChange={this.titleHandleChanged} name='title' value={this.state.title} type="text" className="form-control" id="titleInput" placeholder="Enter title" required/>
        </div>
        <div className="form-group">
          <Editor 
            change={this.textHandleChanged} 
            text={this.state.text} 
          />
        </div>
        {!this.state.loading  
        ? <Button
          label='Save post'
          type='submit'
          addClass='secondary'
        />
        : <Button
            label={
              <Fragment>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </Fragment>
            }
            type='button'
            addClass='secondary'
            disabled={true}
          />
        }
      </form>
    );
  };
};

export default PostForm;