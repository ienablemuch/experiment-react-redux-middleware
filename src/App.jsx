import React from "react";
import "./App.css";

import { connect } from "react-redux";

import {
    incrementCounter,
    decrementCounter,
    resetCounter
} from "./action-creators/counter-action-creators";

function App({
    counter,
    incrementOne,
    incrementCounter,
    decrementCounter,
    resetCounter
}) {
    return (
        <div className="App">
            <p>Counter: {counter}</p>
            <p>
                <button onClick={incrementOne}>+</button>
                <button onClick={decrementCounter}>-</button>
                <button onClick={resetCounter}>Reset</button>
                <button onClick={() => incrementCounter(2)}>
                    Increment by 2
                </button>
            </p>
        </div>
    );
}

// we can destructure the counter state right from the state props:
const mapStateToProps = ({ counter }) => ({ counter });
// long way:
// const mapStateToProps = state => ({ counter: state.counter });

const actionCreators = {
    incrementOne: () => incrementCounter(),
    incrementCounter,
    decrementCounter,
    resetCounter
};

export default connect(
    mapStateToProps,
    actionCreators
)(App);
