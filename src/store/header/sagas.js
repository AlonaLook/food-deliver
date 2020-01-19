import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/api.service';

// Actions
import { HEADER_FETCH,  HEADER_SET,  HEADER_ERROR} from './actions';

export function* fetchData() {
  try {
    const { data: payload } = yield call(Api.getHeaderData);
    
    yield put({ type: HEADER_SET, payload })
  } catch (error) {
    yield put({ type:  HEADER_ERROR })
  }
}

export function* watchFetchHeaderData() {
  yield takeEvery( HEADER_FETCH, fetchData)
}
