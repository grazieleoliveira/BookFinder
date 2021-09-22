import {action} from 'typesafe-actions';
import {BookInfo} from '../../../../dtos';
import {
  BooksTypes,
  GetBooksProps,
  GetBooksErrorProps,
  GetBooksSuccessProps,
  GetBookInfoSuccessProps,
  GetBookInfoErrorProps,
  GetBookInfoProps,
} from './types';

export const getBooksAction = (text: string): GetBooksProps =>
  action(BooksTypes.GET_BOOKS, {text});

export const getBooksSuccessAction = (listBooks: any): GetBooksSuccessProps =>
  action(BooksTypes.GET_BOOKS_SUCCESS, {listBooks});

export const getBooksErrorAction = (): GetBooksErrorProps =>
  action(BooksTypes.GET_BOOKS_ERROR);

export const getBookInfoAction = (id: string): GetBookInfoProps =>
  action(BooksTypes.GET_BOOK_INFO, {id});

export const getBookInfoSuccessAction = (
  book: BookInfo,
): GetBookInfoSuccessProps => action(BooksTypes.GET_BOOK_INFO_SUCCESS, {book});

export const getBookInfoErrorAction = (): GetBookInfoErrorProps =>
  action(BooksTypes.GET_BOOK_INFO_ERROR);
