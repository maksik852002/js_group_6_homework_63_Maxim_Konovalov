import React, { Component, Fragment } from 'react';
import axiosBlog from '../../axiosBlog';
import NavBar from '../../components/UI/NavBar/NavBar';

class About extends Component {
  state ={
    about: {},
  };

  async componentDidMount () {
    const result = await axiosBlog.get('/about.json');
    result.data && this.setState({about:result.data})
  }

  render = () => {
    let { about} = this.state
    console.log(this.state);
    return (
      <Fragment>
        <NavBar/>
        <div className='container'>
          <h3 className='text-center pt-4 mb-2'>Информация о блоге</h3>
          <p className='text-justify' style={{lineHeight:'1.8'}}>{about.info}</p>
          <h3 className='text-center pt-4 mb-2'>Правила использования</h3>
          <p className='text-justify'style={{lineHeight:'1.8'}}>{about.rules}</p>
          <p className='m-0'>С уважением,</p>
          <span>Максим</span>
        </div>
      </Fragment>
    )
  }
}

export default About;