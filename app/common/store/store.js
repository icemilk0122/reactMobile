'use strict';

import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root-reducer';
import routes from '../../router/routes';
import Immutable from 'immutable';

function createInitialState() {
  return {
    weather: Immutable.fromJS({
      model: {
        name: 'This is the world of react native.'
      }
    }),
    news: Immutable.fromJS({
      model: {
        content: 'news content'
      }
    }),
    router: Immutable.fromJS({
      routes: routes,
      page: routes.get('weather')
    })
  };
}

export default function configureStore() {
  let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(rootReducer, createInitialState());
}
