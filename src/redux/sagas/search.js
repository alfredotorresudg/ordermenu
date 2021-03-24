import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../../consts/actionTypes';

import { getDemo } from '../api';

export function* searchData({ payload }) {
	try {
	} catch (error) {
	}
}

export default function* search() {
  yield takeLatest(types.SEARCH_START, searchData);
}

