'use strict';

import * as types from '../../common/constants/types';

export default function weatherReducer(state = {}, action) {
  switch (action.type) {
    case types.UPDATE_NAME:

      return state.updateIn(['model', 'name'], ()=> {
        return action.name;
      });

    default:
      return state;
  }
}
