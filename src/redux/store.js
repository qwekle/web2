import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import signedDocumentsReducer from "./reducers/signedDocumentsReducer";
import waitingDocumentsReducer from "./reducers/waitingDocumentsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    loginReducer,
    waitingDocumentsReducer,
    signedDocumentsReducer,
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;