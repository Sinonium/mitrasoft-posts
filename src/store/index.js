import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers/rootReducer";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  ),
);

sagaMiddleware.run(rootWatcher)