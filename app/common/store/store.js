import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root-reducer';
import Immutable from 'immutable';

function createInitialState() {
  return {
    luncher: Immutable.fromJS({
      model: {
        name: 'This is the world of react native.'
      }
    })
  };
}

export default function configureStore() {
  let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(rootReducer, createInitialState());
}
