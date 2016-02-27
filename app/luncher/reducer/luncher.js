'use strict';

import * as types from '../../common/constants/types';
import Immutable from 'immutable';

export default function luncherReducer(state = {}, action) {
  switch (action.type) {
    case types.UPDATE_NAME:

      return state.updateIn(['model', 'name'], function() {
        return action.name
      });

    default:
      return state;
  }
}
