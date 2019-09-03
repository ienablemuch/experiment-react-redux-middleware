import { combineReducers } from "redux";

import { counterReducer } from "./reducers/counter-reducer";

export function createRootReducer() {
    const rootReducer = combineReducers({
        counter: counterReducer
        // ...rest of reducers here
    });

    return rootReducer;
}
