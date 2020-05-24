import React from 'react';

class Router1 extends React.Component {
    render(){
        const {params}=this.props.match;
        console.log("this.props",this.props)
        return (<div><h2>Router1</h2><p>{params.id}</p></div>)
    }
}

export default Router1;