/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, compose } from 'redux';
import reducers from '../reducers';
import initialState from './initialState';

const windowAny = window as any;

const composeEnhancers =
  windowAny.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancers());

export default store;
