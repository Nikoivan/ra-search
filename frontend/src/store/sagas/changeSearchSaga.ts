import { debounce, put } from 'redux-saga/effects';
import { searchActions } from '../slices/searchSlice';

function filterChangeSearchAction(action: ReturnType<typeof searchActions.changeSearchField>): boolean {
  return action.type === searchActions.changeSearchField.type && action.payload.trim() !== '';
}

function* handlerChangeSearchSaga(action: any) {
  yield put(searchActions.searchRequest(action.payload));
}

export default function* watchChangeSearchSaga() {
  yield debounce(500, filterChangeSearchAction, handlerChangeSearchSaga);
}
