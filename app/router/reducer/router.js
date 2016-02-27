'use strict';

import * as types from '../../common/constants/types';

export default function routerReducer(state = {}, action) {
  switch (action.type) {
    case types.NAVIGATE_TO:

      return state.updateIn(['model', 'page'], ()=> {
        return action.page;
      });

    default:
      return state;
  }
}
