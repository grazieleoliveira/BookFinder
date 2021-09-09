import {action} from 'typesafe-actions';
import {ThemeTypes, ToogleThemeProps} from './types';

export const toogleTheme = (): ToogleThemeProps =>
  action(ThemeTypes.THEME_TOGGLE);
