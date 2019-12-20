import React from "react";;

const Contact = props => (
  <div className="card-body col-12 col-sm-6  mt-4" >
    <div className='d-flex flex-column justify-content-center align-items-center border rounded' style={{height:'440px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 25px 14px'}}>
      <h3 className="card-title py-2" style={{textTransform:'uppercase'}}>{props.name}</h3>
      <p className="card-text">{props.value}</p>
    </div>
  </div>
)

export default Contact;
