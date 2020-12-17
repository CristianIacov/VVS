
import React, { Component } from 'react';
class  Admin extends React.Component {
     constructor(props){
  super(props);
  this.state={

  }}
OnPress = () => {
	 fetch('http://localhost:3001/shutdown',{
    method: 'get',
    headers: {'Content-Type':'application/json'}
  })
  .then(response=>response.json())
  .then(data => {
       
        window.alert('Shutting down');

        this.props.onRouteChange('stoppedserver');
        this.props.stopServer(true);
  })

}
OnPress2 = () => {
	 fetch('http://localhost:3001/maintenance',{
    method: 'get',
    headers: {'Content-Type':'application/json'}
  })
  .then(response=>response.json())
  .then(data => {
       
        window.alert('Maintenance');

        this.props.onRouteChange('maintenance');
        this.props.stopServer(true);
  })

}
render()
{
	  return (

<div>
 

<p> Admin page </p>
<p> Server state is RUNNING </p>
<p> Server is running on port 3001 </p>
<input onClick={this.OnPress} type="button" id="stop" value="Stop server"  />
<input onClick={this.OnPress2} type="button" id="maintenance" value="Maintenance"  />
</div>

	  	);

	}
}
	export default Admin;