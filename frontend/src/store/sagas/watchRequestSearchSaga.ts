import { CallEffectDescriptor, SimpleEffect, put, retry, takeLatest } from 'redux-saga/effects';
import { ItemType, SearchRequestAction, searchActions } from '../slices/searchSlice';
import { searchAPIRequest } from '../API/searchRequest';

function* handlerRequestSearchSaga(action: SearchRequestAction) {
  try {
    const data: SimpleEffect<'CALL', CallEffectDescriptor<ItemType[]>> = yield retry(
      3,
      1000,
      searchAPIRequest,
      action.payload
    );

    console.log(data);

    yield put(searchActions.searchSuccess(data));
  } catch {
    yield put(searchActions.searchFailure('Ошибка в обработке запроса'));
  }
}

export default function* watchRequestSearchSaga() {
  yield takeLatest(searchActions.searchRequest.type, handlerRequestSearchSaga);
}
