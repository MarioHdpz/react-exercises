import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: [0, 0]
    }

    add = index => {
        const newCount = this.state.count.slice(); // This line only creates a copy of count
        /**
         * Here you can manipulate newCount
        */
        this.setState({count: newCount});
    }

    substract = index => {
        const newCount = this.state.count.slice(); // This line only creates a copy of count
        /**
         * Here you can change your new count
        */
        this.setState({count: newCount});
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
    }
}