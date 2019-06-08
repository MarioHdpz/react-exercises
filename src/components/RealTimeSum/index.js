import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        countA: 0,
        countB: 0,
    }

    add = id => {}

    substract = id => {}

    render() {
        return (
            <div>
                <div className="counter">
                    <div>-</div>
                    <h1>{this.state.countA}</h1>
                    <div>+</div>
                </div>
                <div className="counter">
                    <div>-</div>
                    <h1>{this.state.countB}</h1>
                    <div>+</div>
                </div>
                <h1>Sum: {0}</h1>
            </div>
        );
    }0
}
