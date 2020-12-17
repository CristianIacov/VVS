
import React, { Component } from 'react';
class  Maintenance extends React.Component {
     constructor(props){
  super(props);
  this.state={

  }}
    onButtonPress2 = () =>{
  	    
  	    this.props.onRouteChange('home');
        this.props.stopServer(false);

  }
render()
{
  	  return (

<div>
 <p>Please note that we will be performing important server maintenance in a few minutes, during which time the server will be unavailable for approximately 5-10 minutes.</p>
 <p>If you are in the middle of something important, please save your work or hold off on any critical actions until we are finished. </p>
 <input onClick={this.onButtonPress2} type="button" value="Stop maintenance"  />
</div>

	  	);

	}
}
	export default Maintenance;