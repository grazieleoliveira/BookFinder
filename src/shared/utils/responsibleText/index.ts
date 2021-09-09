import {Platform, StatusBar, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const {height, width} = Dimensions.get('window');
const standardLength = width > height ? width : height;
const offset = width > height ? 0 : StatusBar.currentHeight;

const deviceHeight =
  Platform.OS === 'android' ? standardLength - offset : standardLength;

export function RFPercentage(percent: any) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

// guideline height for standard 5" device screen is 680
export function RFValue(fontSize: number, standardScreenHeight = 680) {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

const vh = Dimensions.get('window').height / 100;
const vw = Dimensions.get('window').width / 100;
const vmin = Math.min(vh, vw);
const vmax = Math.max(vh, vw);

export function scaleFontSize(fontSize: number) {
  const scaledFontSize = moderateScale(fontSize, 1 * (vmin / vmax));
  return scaledFontSize;
}

export function sfs(fontSize: string | number) {
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
