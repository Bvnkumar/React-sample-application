import React from 'react';
class Temper extends React.Component {
    constructor() {
        super()
        this.state = { name: 100 };
        this.handler = this.handler.bind(this);
        this.state = {temperature: '', scale: 'c'};

    }
    handler(event) {
        this.setState({ name: event.target.value });
    }
    handleCelsiusChange(){
        // this.setState({scale: 'c', temperature})
    }
    handleFahrenheitChange(){
        // this.setState({scale: 'f', temperature})

    }
    render() {
        return (<div><p>Here We are calucalating the temperature</p>
            <Temperverdict temp={this.state.name}></Temperverdict>
            <TemperatureInput scale={'c'} onTemperatureChange={this.handleCelsiusChange}></TemperatureInput>
            <TemperatureInput scale={'f'} onTemperatureChange={this.handleFahrenheitChange} ></TemperatureInput>
            <label>Enter Temperature:<input type="text" value={this.state.name} onChange={this.handler} /></label></div>)
    }

}
const scaleNames = {
    c: 'celsius',
    f: 'Fahrenheit'
}
class TemperatureInput extends React.Component {
    constructor() {
        super();
        this.state = { temperature: '' };
        this.handler=this.handler.bind(this);
    }

    handler(event){
        this.setState({temperature:event.target.value});
        this.props.onTemperChange(event.target.value)

    }
    render() {
        const na=this.props.scale;
        return (<div><legend>Temperature in {scaleNames[na]}</legend>
        <input value={this.state.temperature}  onChange={this.handler}/></div>)

    }
}
function Temperverdict(params) {
    if (params.temp >= 100) {
        return <p>this is suficient temperature</p>
    } else if (!params.temp) {
        return <p>Enter a value</p>
    } else {
        return <p>This is not a suficient</p>
    }
}
export default Temper;