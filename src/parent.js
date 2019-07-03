import React from 'react';

class Parent extends React.Component {
    name = "naren"
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    componentDidMount(){
        console.log("component did mount")
    }
    componentWillMount(){
        console.log("Componentwillmount")
    }
    render() {
        return (<h1>Hellod {this.state.date.toLocaleTimeString()}</h1>)
    }
}

export default Parent;