/**
 * Created by user on 4/23/18.
 */
import { createSelector } from 'reselect';
import { BOOKS_FETCHED, BOOK_CREATED } from '../types';

export default function books(state = {}, action = {}) {
    switch (action.type) {
        case BOOKS_FETCHED:
            return { ...state, ...action.data.entities.books };
        case BOOK_CREATED:
            return{ ...state, ...action.data.entities.books };
        default:
            return state;
    }
}

//Selectors
export const booksSelector = state => state.books;

export const allBooksSelector = createSelector(
  booksSelector,
  booksHash => Object.values(booksHash)
);