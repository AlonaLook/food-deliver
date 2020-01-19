import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { COCKTAILS_FETCH, COCKTAILS_SET, COCKTAILS_ERROR } from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getCocktailsData);
    
    yield put({ type: COCKTAILS_SET, payload })
  } catch (error) {
    yield put({ type: COCKTAILS_ERROR })
  }
}

export function* watchFetchCocktailsData() {
  yield takeEvery(COCKTAILS_FETCH, fetchData)
}
