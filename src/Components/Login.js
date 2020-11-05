import React, { Component } from 'react';
import './Login.css';
class  Login extends React.Component {
     constructor(props){
  super(props);
  this.state={
    signInName:'',
    signInPassword:''
  }}
  onNameChange = (event) => {
  this.setState({signInName: event.target.value})
}
onPasswordChange = (event) => {
  this.setState({signInPassword: event.target.value})
}
onSubmitLogin1= () => {
  fetch('http://localhost:3001/signin',{
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      name:this.state.signInName,
      password: this.state.signInPassword
    })
  })
  .then(response=>response.json())
  .then(data => {
       
          if(data  === 'success'){
          

          this.props.onRouteChange('visualize');
          window.alert('You are logged in');
        }
        else
        {
        	if(data === 'admin')
        	{
        		this.props.setAdmin(true);
        		 this.props.onRouteChange('admin');
        		window.alert('You are logged in as a Admin');
        	}
        	else

        	window.alert('Wrong credentials');
        }
       
        
        	
  })
 
}

changeRoute= () => 
	 this.props.onRouteChange('logged');
  	render(){
		
  return (
<form>
<ul className="form-style-1">
<h1> Login </h1>

<li>
    <label>Username <span className="required">*</span></label>
        <input onChange={this.onNameChange} type="name"  className="field-long"   />
        <label>Password <span className="required">*</span></label>
        <input  onChange={this.onPasswordChange} type="password"  className="field-long"     />

</li>
   <li>
        
        
        
    </li>
<li>

  <input onClick={this.onSubmitLogin1} type="button" value="Submit"  />
  
 </li>  

</ul>
</form>	
    
  );
}}

export default Login;