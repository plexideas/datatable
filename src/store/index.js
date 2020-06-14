import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger'

const middlewares = [thunk];

export default createStore(rootReducer, applyMiddleware(...middlewares, logger));
