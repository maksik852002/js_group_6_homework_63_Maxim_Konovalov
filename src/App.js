import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import AddPostForm from './containers/AddPostForm/AddPostForm';
import Contacts from './containers/Contacts/Contacts'
import About from './containers/About/About'
import Post from './components/Posts/Post';

import './bootstrap.min.css';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={MainPage}/>
      <Route path='/posts/add' component={AddPostForm}/>
      <Route path='/posts/:id' component={Post}/>
      <Route path='/about'  component={About}/>
      <Route path='/contacts'  component={Contacts}/>
      <Route render={() => <h1>Not found</h1>}/>
    </Switch>
  </BrowserRouter>
);

export default App;
