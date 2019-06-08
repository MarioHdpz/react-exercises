import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: 0,
    }

    add = () => {}

    substract = () => {}

    render() {
        return (
            <div className="counter">
                <div>-</div>
                <h1>{this.state.count}</h1>
                <div>+</div>
            </div>
        );
    }
}
