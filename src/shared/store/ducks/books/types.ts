import {Action} from 'redux';
import {BookInfo} from '../../../../dtos';

export enum BooksTypes {
  GET_BOOKS = '@books/GET_BOOKS',
  GET_BOOKS_SUCCESS = '@books/GET_BOOKS_SUCCESS',
  GET_BOOKS_ERROR = '@books/GET_BOOKS_ERROR',
  GET_BOOK_INFO = '@books/GET_BOOK_INFO',
  GET_BOOK_INFO_SUCCESS = '@books/GET_BOOK_INFO_SUCCESS',
  GET_BOOK_INFO_ERROR = '@books/GET_BOOK_INFO_ERROR',
}

export interface BooksState {
  listBooks: any;
  loading: boolean;
  book: BookInfo;
}

export interface GetBooksProps extends Action {
  type: BooksTypes.GET_BOOKS;
  payload: {text: string};
}

export interface GetBooksSuccessProps extends Action {
  type: BooksTypes.GET_BOOKS_SUCCESS;
  payload: {listBooks: any};
}

export interface GetBooksErrorProps extends Action {
  type: BooksTypes.GET_BOOKS_ERROR;
}

export interface GetBookInfoProps extends Action {
  type: BooksTypes.GET_BOOK_INFO;
  payload: {id: string};
}

export interface GetBookInfoSuccessProps extends Action {
  type: BooksTypes.GET_BOOK_INFO_SUCCESS;
  payload: {book: BookInfo};
}

export interface GetBookInfoErrorProps extends Action {
  type: BooksTypes.GET_BOOK_INFO_ERROR;
}
