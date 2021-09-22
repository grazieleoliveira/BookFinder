import {Reducer} from 'redux';

import {BooksTypes, BooksState} from './types';

const INITIAL_STATE: BooksState = {
  listBooks: [],
  loading: false,
  book: {
    kind: '',
    id: '',
    etag: '',
    selfLink: '',
    volumeInfo: {
      title: '',
      authors: [],
      publisher: '',
      publishedDate: '',
      description: '',
      pageCount: '',
      categories: [],
      averageRating: '',
      ratingsCount: '',
      language: '',
      imageLinks: {
        thumbnail: '',
      },
    },
  },
};

const reducer: Reducer<BooksState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case BooksTypes.GET_BOOKS:
      return {
        loading: true,
      };
    case BooksTypes.GET_BOOKS_SUCCESS:
      return {
        loading: false,
        listBooks: payload.listBooks,
      };
    case BooksTypes.GET_BOOKS_ERROR:
      return {
        loading: false,
        listBooks: [],
      };
    case BooksTypes.GET_BOOK_INFO:
      return {
        loading: true,
      };
    case BooksTypes.GET_BOOK_INFO_SUCCESS:
      return {
        loading: false,
        book: payload.book,
      };
    case BooksTypes.GET_BOOK_INFO_ERROR:
      return {
        loading: false,
        book: [],
      };
    default:
      return state;
  }
};

export default reducer;
