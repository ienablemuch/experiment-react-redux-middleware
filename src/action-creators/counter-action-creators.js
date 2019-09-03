import {
    COUNTER__INCREMENT,
    COUNTER__DECREMENT,
    COUNTER__RESET
} from "../actions/counter-actions";

export const incrementCounter = step => ({ type: COUNTER__INCREMENT, step });
export const decrementCounter = () => ({ type: COUNTER__DECREMENT });
export const resetCounter = () => ({ type: COUNTER__RESET });
