import {action} from 'typesafe-actions';
import {
  FontTypes,
  DecrementFontSizeProps,
  IncrementFontSizeProps,
  RecoveryFontSizeProps,
} from './types';

export const incrementFontSize = (): IncrementFontSizeProps =>
  action(FontTypes.FONT_SIZE_INCREMENT);

export const decrementFontSize = (): DecrementFontSizeProps =>
  action(FontTypes.FONT_SIZE_DECREMENT);

export const recoveryFontSize = (): RecoveryFontSizeProps =>
  action(FontTypes.FONT_SIZE_RECOVERY);
