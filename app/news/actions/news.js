import * as types from '../../common/constants/types';

export function updateContent(content) {
  return {
    type: types.UPDATE_CONTENT,
    content
  };
}
