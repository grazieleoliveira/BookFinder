import {all, fork} from 'redux-saga/effects';
import books from '../ducks/books/sagas';

export default function* rootSaga() {
  yield all([fork(books)]);
}
