import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
{
  super()
  this.state={data:''}
  this.updateState=this.updateState.bind(this)
this.updateCheck=this.updateCheck.bind(this)
}

updateState(e)
{
this.setState({data:e.target.value})
} 

updateCheck(){
alert("this is for testing")
}
 render() {
    return (
      <div className="App">
      <form>
        <input type="text" placeholder="username" onChange={this.updateState}/><br/>
      </form>
      <Child updateContent={this.updateCheck}/>
      </div>
    );
  }
}

class Child extends Component{
  render(){
    return <div><form>
      <input type="text" onChange={this.props.updateContent}/>
      </form></div>;
  }
  }

export default App;
