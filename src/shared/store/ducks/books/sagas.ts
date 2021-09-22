import {all, takeLatest, call, put, select} from 'redux-saga/effects';

import {getBook, searchBooks} from '../../../services/books';

import {BooksTypes, GetBookInfoProps, GetBooksProps} from './types';

import {
  getBooksSuccessAction,
  getBooksErrorAction,
  getBookInfoSuccessAction,
  getBookInfoErrorAction,
} from './actions';

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

function* getBookInfoSagas(action: GetBookInfoProps) {
  try {
    const response: ResponseGenerator = yield call(getBook, action.payload.id);

    if (response.status >= 200 && response.status < 300) {
      yield put(getBookInfoSuccessAction(response.data));
    } else {
      yield put(getBookInfoErrorAction());
    }
  } catch {
    yield put(getBookInfoErrorAction());
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(BooksTypes.GET_BOOKS, getBooksSagas),
    takeLatest(BooksTypes.GET_BOOK_INFO, getBookInfoSagas),
  ]);
}
