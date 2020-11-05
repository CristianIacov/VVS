import React, { Component } from 'react';
import amgheghe from '../Imagini/amgheghe.jpg';
import m8 from '../Imagini/m8.jpg';
import rsq8 from '../Imagini/rsq8.jpg';
import './Visualize.css';
class  Visualize extends React.Component {
	     constructor(props){
  super(props);
}
SubmitAmg = () => {
  fetch('http://localhost:3001/amg',{
    method: 'get',
    headers: {'Content-Type':'application/json'}
  })
  .then(response=>response.json())
  .then(data => {
       
    this.props.onRouteChange(data);
        
        	
  })
 
}

SubmitRsq8 = () => {
  fetch('http://localhost:3001/rsq8',{
    method: 'get',
    headers: {'Content-Type':'application/json'}
  })
  .then(response=>response.json())
  .then(data => {
       
    this.props.onRouteChange(data);
        
        	
  })
 
}
render()
{
  return (

  <div className="row">
  <div className="column"> 
<a onClick={this.SubmitAmg}className=" hover-bg-light-green">
<img  src={m8} /	>
</a>

</div>
<div className="column">
<a onClick={this.SubmitRsq8} className=" hover-bg-light-green">
<img  src={rsq8}/	>
</a>

</div>

</div>


  );
}
}

export default Visualize