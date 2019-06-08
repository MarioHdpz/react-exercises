import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: [0, 0]
    }

    add = index => {}

    substract = index => {}

    render() {
        return (
            <div>
                <div className="counter">
                    <div>-</div>
                    <h1>{this.state.count[0]}</h1>
                    <div>+</div>
                </div>
                <div className="counter">
                    <div>-</div>
                    <h1>{this.state.count[1]}</h1>
                    <div>+</div>
                </div>
                <h1>Sum: {0}</h1>
            </div>
        );
    }0
}
