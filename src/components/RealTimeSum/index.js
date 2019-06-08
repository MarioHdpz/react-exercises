import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: [0, 0]
    }

    add = index => {
        const newCount = this.state.count.slice(); // This line only creates a copy of count
        newCount[index] = this.state.count[index] + 1;
        this.setState({count: newCount});
    }

    substract = index => {
        const newCount = this.state.count.slice(); // This line only creates a copy of count
        newCount[index] = this.state.count[index] - 1;
        this.setState({count: newCount});
    }

    render() {
        return (
            <div>
                <div className="counter">
                    <div onClick={() => this.substract(0)}>-</div>
                    <h1>{this.state.count[0]}</h1>
                    <div onClick={() => this.add(0)}>+</div>
                </div>
                <div className="counter">
                    <div onClick={() => this.substract(1)}>-</div>
                    <h1>{this.state.count[1]}</h1>
                    <div onClick={() => this.add(1)}>+</div>
                </div>
                <h1>Sum: {this.state.count[0] + this.state.count[1]}</h1>
                <h1>Difference: {Math.abs(this.state.count[0] - this.state.count[1])}</h1>
            </div>
        );
    }
}