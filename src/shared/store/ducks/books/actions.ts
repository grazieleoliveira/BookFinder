import {action} from 'typesafe-actions';
import {
  BooksTypes,
  GetBooksProps,
  GetBooksErrorProps,
  GetBooksSuccessProps,
  GetMoreBooksProps,
} from './types';

export const getBooksAction = (text: string): GetBooksProps =>
  action(BooksTypes.GET_BOOKS, {text});

export const getMoreBooksAction = (text: string): GetMoreBooksProps =>
  action(BooksTypes.GET_MORE_BOOKS, {text});

export const getBooksSuccessAction = (listBooks: any): GetBooksSuccessProps =>
  action(BooksTypes.GET_BOOKS_SUCCESS, {listBooks});

export const getBooksErrorAction = (): GetBooksErrorProps =>
  action(BooksTypes.GET_BOOKS_ERROR);
