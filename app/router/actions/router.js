import * as types from '../../common/constants/types';

export function navigateTo(page) {
  return {
    type: types.NAVIGATE_TO,
    page
  };
}
