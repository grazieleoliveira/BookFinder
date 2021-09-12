import {combineReducers} from 'redux';

import font from './font';
import theme from './theme';
import profile from './profile';

export default combineReducers({font, theme, profile});
