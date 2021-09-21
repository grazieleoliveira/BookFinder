import {all, takeLatest, call, put, select} from 'redux-saga/effects';

import {searchBooks} from '../../../services/books';

import {BooksTypes, GetBooksProps, GetMoreBooksProps} from './types';

import {getBooksSuccessAction, getBooksErrorAction} from './actions';
import {ApplicationState} from '../..';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getBooksSagas(action: GetBooksProps) {
  try {
    const response: ResponseGenerator = yield call(
      searchBooks,
      action.payload.text,
    );

    if (response.status >= 200 && response.status < 300) {
      // const {listBooks} = yield select((state: ApplicationState) => state.books);
      // const moreBooks = [...listBooks, ...response.data.items];
      yield put(getBooksSuccessAction(response.data.items));
    } else {
      yield put(getBooksErrorAction());
    }
  } catch {
    yield put(getBooksErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(BooksTypes.GET_BOOKS, getBooksSagas)]);
}
