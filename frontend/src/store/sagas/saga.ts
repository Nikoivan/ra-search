import { spawn } from 'redux-saga/effects';

import watchChangeSearchSaga from './changeSearchSaga';
import watchRequestSearchSaga from './watchRequestSearchSaga';

export default function* saga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchRequestSearchSaga);
}
