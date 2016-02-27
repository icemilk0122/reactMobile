'use strict';

import * as types from '../../common/constants/types';

export default function newsReducer(state = {}, action) {
  switch (action.type) {
    case types.UPDATE_CONTENT:

      return state.updateIn(['model', 'content'], ()=> {
        return action.content;
      });

    default:
      return state;
  }
}
