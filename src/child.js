import React from 'react';
class Child extends React.Component{
    constructor(){
        super();
        // this.childHandler=this.childHandler.bind(this);
    }
    render(){
        const names=['naren','kumar'];
        return (<div>
            This is from child
            {names.map(n=><h3>{n}</h3>)}
            <button onClick={this.props.childHandler('child')}>Click here</button>
        </div>)
    }
}
export default Child;