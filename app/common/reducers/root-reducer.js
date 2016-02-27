'use strict';

import weatherReducer from '../../weather/reducer/weather';
import newsReducer from '../../news/reducer/news';
import routerReducer from '../../router/reducer/router';

const rootReducer = (state, action) => {
  return Object.assign({}, state, {
    weather: weatherReducer(state.weather, action),
    news: newsReducer(state.news, action),
    router: routerReducer(state.router, action)
  });
};

export default rootReducer;
