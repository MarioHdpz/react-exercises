import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: 0,
    }
    /**
     * Remember that this component receives two props:
     * 
     * onAdd
     * onSubstract
     * 
     * They are definition of functions, you can call them
     * like this:
     * 
     * this.props.onAdd()
     * this.props.onSubstract()
     * 
     * But where?
     */

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