import React, { Component, Fragment } from 'react';
import axiosBlog from '../../axiosBlog';
import NavBar from '../../components/UI/NavBar/NavBar';
import Contact from '../../components/Contact/Contact';

class Contacts extends Component {
  state ={
    contacts: {},
  };

  async componentDidMount () {
    const result = await axiosBlog.get('/contacts.json');
    result.data && this.setState({contacts:result.data})
  }

  render = () => {
    let { contacts } = this.state
    console.log(this.state);
    return (
      <Fragment>
        <NavBar/>
        <div className='container'>
          <div className='row'>
          {Object.keys(contacts).map(id => (
            // console.log(id, contacts[id])
            <Contact
              key={id}
              name={id}
              value={contacts[id]}
            />
          ))}
          
          </div>
        </div>
      </Fragment>
    )
  }
}
  


export default Contacts;