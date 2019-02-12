import React, {Component} from 'react';

class LocalTime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            seconds: 0
        };

        this.handleChange = handleChange.bind(this);
    }

    handleChange() {

    }

    handleSeconds() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }))
    }

    componentDidMount() {
        this.incrementInterval = setInterval(() => {
            this.handleSeconds()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.incrementInterval);
    }

    render() {
        this.state.seconds === 5 && this.clearInterval()
        return (
            <div>
                <h3>It is {this.state.date.toLocaleDateString()}</h3>
                <p>Seconds: {this.state.seconds}</p>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
            </div>
            
        )
    }
}

export default LocalTime;