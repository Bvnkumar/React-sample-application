import React from 'react';
import Child from './child';
class ParentOne extends React.Component{
    constructor(){
        super();
        this.parentHandler=this.parentHandler.bind(this);
    }
    parentHandler(childname){
        alert(`Hello ${childname}`)
    }
    render(){
        return (<div>Hello this is parent one Component <Child childHandler={this.parentHandler}/></div>)
    }
}

export default ParentOne;
