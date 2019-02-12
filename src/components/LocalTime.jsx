import React, { Component } from 'react';

class LocalTime extends Component {
    // fires before component is mounted
    constructor(props) {
        super(props);

        // set local component state
        this.state = {
            date: new Date(),
            seconds: 0,
            do: false,
            fruit: 'banana',
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    countSeconds() {
        // this.setState({
        //     do: true,
        //     fruit: 'laranja'
        // })
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.intervalCounter = setInterval(() => {
            this.countSeconds();
        }, 1000);
    }

    componentWillUnmount() {
        this.clearInterval();
    }

    clearInterval() {
        clearInterval(this.intervalCounter);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        if (this.state.seconds === 20) {
            this.clearInterval();
        }

        return (
            <div>
                <h3>It is {this.state.date.toLocaleDateString()}</h3>
                <p>Seconds: {this.state.seconds}</p>
                <input
                    type='text'
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <p>{this.state.value}</p>
            </div>
        );
    }
}

export default LocalTime;
