import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: 0,
    }

    add = () => {
        this.setState({count: this.state.count + 1})
    }

    substract = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count - 1})
        }
    }

    render() {
        return (
            <div className="counter">
                <div onClick={() => this.substract()}>-</div>
                <h1>{this.state.count}</h1>
                <div onClick={() => this.add()}>+</div>
            </div>
        );
    }
}
