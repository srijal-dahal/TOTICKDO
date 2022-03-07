import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "./reducer";
import Saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const appliedMiddleware = applyMiddleware(sagaMiddleware);
const store = createStore(Reducer, appliedMiddleware);
sagaMiddleware.run(Saga);

export default store;
