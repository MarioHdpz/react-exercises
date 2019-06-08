import React from "react";

const Counter = props => {

    return (
        <div className="counter">
            <div onClick={() => {/** */}}>-</div>
            <h1>{props.value}</h1>
            <div onClick={() => {/** */}}>+</div>
        </div>
    );
}

export default Counter;