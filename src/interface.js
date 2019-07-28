import React from 'react';
interface IeMessageProps {
    name:string;
}
class InterClass extends React.Component<IeMessageProps> {
    render(){
        return (<p>Hello {this.props.name}-{this.props.id}</p>)
    }
}
export default InterClass;