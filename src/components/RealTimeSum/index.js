import React, { Component } from "react";
import Counter from "../Counter";

export default class RealTimeSum extends Component {
    state = {
        count: [0 ,0 ,0, 0, 0, 0, 0]
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
        const counters = this.state.count.map((value, index) => (
            <Counter 
                value={value}
                onAdd={() => this.add(index)}
                onSubstract={() => this.substract(index)}
            />
        ));
        return (
            <div>
                {counters}
                <h1>Sum: {0}</h1>
            </div>
        );
    }
}