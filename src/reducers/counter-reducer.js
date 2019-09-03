import {
    COUNTER__INCREMENT,
    COUNTER__DECREMENT,
    COUNTER__RESET
} from "../actions/counter-actions";

export function counterReducer(state = 0, action) {
    switch (action.type) {
        case COUNTER__INCREMENT:
            return state + (action.step || 1);
        case COUNTER__DECREMENT:
            return state - 1;
        case COUNTER__RESET:
            return 0;
        default:
            return state;
    }
}
