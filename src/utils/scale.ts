import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~375x812 screen
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const sizeScale = (size: number) => (width / guidelineBaseWidth) * size;

export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

export const fontScale = (size: number) => {
  const scaledSize = sizeScale(size);
  return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
};
