import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root-reducer';
import Luncher from '../../luncher/components/Luncher';
import News from '../../news/components/News';

import Immutable from 'immutable';

function createInitialState() {
  return {
    luncher: Immutable.fromJS({
      model: {
        name: 'This is the world of react native.'
      }
    }),
    news: Immutable.fromJS({
      model: {
        content: "news content"
      }
    }),
    router: Immutable.fromJS({
      routes: {
        Luncher: {
          component: Luncher,
          title: "Welcome"
        },
        news : {
          component: News,
          title: "News"
        }
      },
      page: Luncher
    })
  };
}

export default function configureStore() {
  let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(rootReducer, createInitialState());
}
