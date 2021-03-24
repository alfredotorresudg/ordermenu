import { get } from 'lodash';
import * as types from '../../consts/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_START:
      return {...state};
      break;
    case types.SEARCH_ERROR:
        return {...state};
        break;
    case types.SEARCH_COMPLETE:
      return {...state};
      break;
    default:
      return {...state};
  }
}
