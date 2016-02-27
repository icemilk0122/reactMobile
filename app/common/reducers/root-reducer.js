'use strict';

import luncherReducer from '../../luncher/reducer/luncher';
import newsReducer from '../../news/reducer/news';
import routerReducer from '../../router/reducer/router';

const rootReducer = (state, action) => {
  return Object.assign({}, state, {
    luncher: luncherReducer(state.luncher, action),
    news: newsReducer(state.news, action),
    router: routerReducer(state.router, action)
  });
};

export default rootReducer;
