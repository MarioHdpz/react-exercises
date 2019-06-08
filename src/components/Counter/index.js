import React from "react";

const Counter = props => {
    return (
        <div className="counter">
            <div onClick={() => props.onSubstract()}>-</div>
            <h1>{props.value}</h1>
            <div onClick={() => props.onAdd()}>+</div>
        </div>
    );
}

export default Counter;