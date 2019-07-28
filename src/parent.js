import React from 'react';

class Parent extends React.Component {
    name = "naren";
    inerval;
    constructor(props) {
        super(props);
        this.state = { date: new Date(), eligible:true }
        this.changeState=this.changeState.bind(this)
    }
    componentDidMount() {
        console.log("component did mount");
        this.interval = setInterval(() => {
            this.tick()
        }, 1000)
    }
    componentWillMount() {
        console.log("Componentwillmount");
        clearInterval(this.inerval)
    }
    tick() {
        this.setState({ date: new Date() })
    }
    sayHello(s, e) {
        console.log("e ", e);
        console.log("s ", s);
        console.log("Hello")
    }
   changeState(){
       console.log("we are changing the state");
       this.setState(state=>({eligible:!state.eligible}))
   }
    // render() {
    //     return (<div><h1>Date: {this.state.date.toLocaleTimeString()}</h1><br></br><button onClick={(e) => { this.sayHello("naren", e) }}>Hello</button></div>)
    // }
    render(){
        return(<div><Welcome eligible={this.state.eligible}/><button onClick={this.changeState}>Click</button></div>)
    }
}
function Welcome(props) {
    if(props.eligible){
        return (<p>These are eligiable </p>)
    }else{
        return (<p>These are not eligiable</p>)
    }
}
//export default Parent;

//creating a react component using createClass
const firstComp=React.createClass({
    render:function(){
        return (<div>Creating class using react class</div>)
    }
})

export default firstComp;
