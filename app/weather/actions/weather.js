import * as types from '../../common/constants/types';

export function updateName(name) {
  return {
    type: types.UPDATE_NAME,
    name
  };
}