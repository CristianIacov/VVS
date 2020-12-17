
import React, { Component } from 'react';
class  StoppedServer extends React.Component {
     constructor(props){
  super(props);
  this.state={

  }}

  onButtonPress = () =>{
  	    
  	    this.props.onRouteChange('home');
        this.props.stopServer(false);

  }
render()
{
  	  return (

<div>
 <p> Serverul este oprit </p>
 <input onClick={this.onButtonPress} type="button" value="Start server"  />
</div>
 
	  	);

	}
}
	export default StoppedServer;