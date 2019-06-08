import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: [0, 0]
    }

    add = index => {
        const newState = this.state.slice(); // This line only creates a copy
        /**
         * Here you can modify newState
         */
        this.setState({state: newState})
    }

    substract = index => {
        const newState = this.state.slice(); // This line only creates a copy
        /**
         * Here you can modify newState
         */
        this.setState({state: newState})
    }

    render() {
        return (
            <div>
                <div className="counter">
                    <div onClick={() => {}}>-</div>
                    <h1>{this.state.count[0]}</h1>
                    <div onClick={() => {}}>+</div>
                </div>
                <div className="counter">
                    <div onClick={() => {}}>-</div>
                    <h1>{this.state.count[1]}</h1>
                    <div onClick={() => {}}>+</div>
                </div>
                <h1>Sum: {0}</h1>
            </div>
        );
    }0
}