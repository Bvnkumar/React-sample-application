import React from "react";
class Conditional extends React.Component {
  constructor(props) {
    super(props);
    this.state = { said: "ok" };
  }
  render() {
    console.log("THis.props", this.props);
    // this.setState({said:"ok"})
    return <Greeting said={this.state.said} />;
  }
}
function Greeting(props) {
  if (props.said == "ok") {
    return <SaidOk />;
  } else {
    return <SaidNotOk />;
  }
}
function SaidOk() {
  return <p>Said ok</p>;
}
function SaidNotOk() {
  return <p>Said not ok</p>;
}
export default Conditional;
