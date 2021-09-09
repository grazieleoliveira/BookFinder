import {Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const cache = {};

function getFontSizeStyle(fontSize: any) {
  if (cache[fontSize]) return cache[fontSize];

  const style = {fontSize};
  cache[fontSize] = style;

  return style;
}

export function createStyle(fontSize: number, style?: any) {
  const fontSizeStyle = getFontSizeStyle(fontSize);

  if (style) {
    return [style, fontSizeStyle];
  }
  return fontSizeStyle;
}

const vh = Dimensions.get('window').height / 100;
const vw = Dimensions.get('window').width / 100;
const vmin = Math.min(vh, vw);
const vmax = Math.max(vh, vw);

export function scaleFontSize(fontSize: number) {
  const scaledFontSize = moderateScale(fontSize, 1 * (vmin / vmax));
  return scaledFontSize;
}

export function sfs(fontSize: number | string) {
  if (typeof fontSize === 'string') {
    const [splittedFontSize] = fontSize.split('px');
    if (splittedFontSize) {
      return scaleFontSize(Number(splittedFontSize));
    }
    throw new Error("Input format is invalid! try '8px' or 8");
  }
  return scaleFontSize(fontSize);
}

export {s, vs, ms} from 'react-native-size-matters';
