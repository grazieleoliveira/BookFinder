import {Action} from 'redux';

export enum BooksTypes {
  GET_BOOKS = '@books/GET_BOOKS',
  GET_MORE_BOOKS = '@books/GET_MORE_BOOKS',
  GET_BOOKS_SUCCESS = '@books/GET_BOOKS_SUCCESS',
  GET_BOOKS_ERROR = '@books/GET_BOOKS_ERROR',
}

export interface BooksState {
  listBooks: any;
  loading: boolean;
}

export interface GetBooksProps extends Action {
  type: BooksTypes.GET_BOOKS;
  payload: {text: string};
}

export interface GetMoreBooksProps extends Action {
  type: BooksTypes.GET_MORE_BOOKS;
  payload: {text: string};
}

export interface GetBooksSuccessProps extends Action {
  type: BooksTypes.GET_BOOKS_SUCCESS;
  payload: {listBooks: any};
}

export interface GetBooksErrorProps extends Action {
  type: BooksTypes.GET_BOOKS_ERROR;
}
