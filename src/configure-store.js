import { applyMiddleware, createStore, compose } from "redux";

import { createRootReducer } from "./create-root-reducer";

import { logger } from "./middlewares/logger";

export function configureStore(preloadedState) {
    const rootReducer = createRootReducer();

    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                logger
                // ...other middlewares
            )
        )
    );

    return store;
}
