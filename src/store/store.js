import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const updatedApplyMiddleware = applyMiddleware(thunk)
const store = createStore(
    rootReducer,
    updatedApplyMiddleware
);


export { store };