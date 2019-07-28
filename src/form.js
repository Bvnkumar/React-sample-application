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
            <select value={'lime'} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select> </form> </div>)
    }
}

export default FormClass;