'use strict';

import luncherReducer from '../../luncher/reducer/luncher';
import newsReducer from '../../news/reducer/news';

const rootReducer = (state, action) => {
  return Object.assign({}, state, {
    luncher: luncherReducer(state.luncher, action),
    news: newsReducer(state.news, action)
  });
};

export default rootReducer;
