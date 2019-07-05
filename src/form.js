import React from 'react';
class FormClass extends React.Component {
    constructor() {
        super()
        this.state = { name: 'narnedra', checked: true }
        this.setstateValue = this.setstateValue.bind(this);
        this.checkBox = this.checkBox.bind(this);
    }
    checkBox(event) {
        this.setState({ checked: event.target.checked })
    }
    setstateValue(event) {
        this.setState({ name: event.target.value })
    }
    render() {
        return (<div><form><label>Name:<input value={this.state.name} onChange={this.setstateValue} /></label>{this.state.name}
            <input type="checkbox" checked={this.state.checked} onChange={this.checkBox} />sdsa{this.state.checked}
        </form> </div>)
    }
}
export default FormClass;