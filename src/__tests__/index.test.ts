import { fontScale, verticalScale, isSmallDevice, isTablet } from '../index';

describe('react-native-mixins', () => {
  test('should export fontScale', () => {
    expect(fontScale).toBeDefined();
  });

  test('should export verticalScale', () => {
    expect(verticalScale).toBeDefined();
  });

  test('should export isSmallDevice', () => {
    expect(isSmallDevice).toBeDefined();
  });

  test('should export isTablet', () => {
    expect(isTablet).toBeDefined();
  });
});
