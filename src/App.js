
import React, { Component } from 'react';
import {render} from 'react-dom';
import Login from './Components/Login';
import Visualize from './Components/Visualize';
import Admin from './Components/Admin';
class App extends React.Component{

  constructor(){
    super();
    this.state={
      route: 'home',
      isAdmin: false,
        user: {
        

  name: ''
 
    }
  }
}
setAdmin = (data) =>
  this.setState({isAdmin : data
  });
 
   loadUser = (data) =>{
   this.setState({user:
   {  name: data.name
   }})}

    onRouteChange = (route) => {
    // if( route === 'signout'){
    //   this.setState({isSignedIn: false})

    // }
    // else 
      if (route === 'home')
    {
      this.setState({isHome: true})
    }
   
    this.setState({route: route});
  }
  render(){
  const {route} = this.state;
 return (
  
  <div>
  {
    
      route ==='home'?
      <Login setAdmin={this.setAdmin} onRouteChange={this.onRouteChange}/>
      :
      (route === 'visualize'?

      <Visualize onRouteChange={this.onRouteChange}/>
      
      :
     (route === 'admin'?

    <Admin />
      :
      <p> Eroare </p>
      ))

    
    }
  </div>
    );

}
}

export default App