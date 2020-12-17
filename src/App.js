
import React, { Component } from 'react';
import {render} from 'react-dom';
import Login from './Components/Login';
import Visualize from './Components/Visualize';
import Admin from './Components/Admin';
import StoppedServer from './Components/StoppedServer';
import Maintenance from './Components/Maintenance';
class App extends React.Component{

  constructor(){
    super();
    this.state={
      route: 'home',
      isAdmin: false,
      isShutdown: false,
        user: {
        

  name: ''
 
    }
  }
}
stopServer = (data) =>
  this.setState({isShutdown : data
  });
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
  const {isShutdown} = this.state;
 return (
  
  <div>
  {
    
      route ==='home'?
      <Login setAdmin={this.setAdmin} onRouteChange={this.onRouteChange}/>
      :
      (route === 'visualize' && isShutdown === false?

      <Visualize onRouteChange={this.onRouteChange}/>
      
      :
     (route === 'admin'  && isShutdown === false?

    <Admin onRouteChange={this.onRouteChange} stopServer = {this.stopServer}/>
      :
      (route === 'stoppedserver'?

        <StoppedServer stopServer={this.stopServer} onRouteChange={this.onRouteChange}/>
        :
         (route === 'maintenance'?
          <Maintenance stopServer={this.stopServer} onRouteChange={this.onRouteChange}/>
          :
      <p> Serverul este oprit </p>
      ))))

    
    }
  </div>
    );

}
}

export default App