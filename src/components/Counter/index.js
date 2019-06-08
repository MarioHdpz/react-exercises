import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: 0,
    }

    add = () => {
        /* This does nothing */
        this.setState({count: this.state.count})
    }

    substract = () => {
        /* This does nothing */
        this.setState({count: this.state.count})
    }

    render() {
        return (
            <div className="counter">
                <div onClick={() => {/* ? */}}>-</div>
                <h1>{this.state.count}</h1>
                <div onClick={() => {/* ? */}}>+</div>
            </div>
        );
    }
}
