'use strict';

import luncherReducer from '../../luncher/reducer/luncher';

const rootReducer = (state, action) => {
  return Object.assign({}, state, {
    luncher: luncherReducer(state.luncher, action)
  });
};

export default rootReducer;
