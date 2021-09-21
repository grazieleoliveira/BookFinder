import {combineReducers} from 'redux';

import font from './font';
import theme from './theme';
import profile from './profile';
import books from './books';

export default combineReducers({font, theme, profile, books});
