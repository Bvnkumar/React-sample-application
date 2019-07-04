import React from 'react';
class List extends React.Component {
    constructor(props) {
        super()
        this.state = { sample: props.sample }

    }
    render() {
        const numbers = this.props.sample;
        const content = this.props.sample.map((prop) => {
            return <li key={prop.toString()}>{prop}</li>
        })
        return (<p>{content}</p>)
    }
}
export default List;