import React, { Component, Fragment } from 'react';
import axiosBlog from '../../axiosBlog';
import NavBar from '../../components/UI/NavBar/NavBar';
import Posts from '../../components/Posts/Posts';

class MainPage extends Component  {

  state = {
    posts: {},
  };

  async componentDidMount () {
    const result = await axiosBlog.get('/posts.json');
    result.data && this.setState({posts:result.data})
  }
 
  render = () => {
    let { posts } = this.state
    return (
      <Fragment>
        <NavBar/>
        <div className='container'>
          {Object.keys(posts).map(id => (
            <Posts
              key={id}
              date={posts[id].date}
              title={posts[id].title}
              id={id}
            />
          ))}
        </div>
      </Fragment>
    );
  };
};

export default MainPage;