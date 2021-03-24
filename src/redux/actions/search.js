import { SEARCH_START } from '../../consts/actionTypes';

export const search = payload => ({
  type: SEARCH_START,
  payload
});
