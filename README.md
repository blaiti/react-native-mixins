# React Native Mixins

A lightweight utility library for React Native that provides essential mixins and utilities for responsive design, platform-specific styling, and device detection.

## 🧪 Features

- 📱 **Responsive Scaling**: Scale sizes, fonts, and layouts across different screen sizes
- 🎯 **Platform-Specific Styling**: Easy platform-specific style management
- 📏 **Device Detection**: Detect device types and orientations
- 📦 **Zero Dependencies**: No external dependencies
- ⚡ **Lightweight**: Minimal bundle size impact

## 📦 Installation

```bash
npm install react-native-mixins
```

or

```bash
yarn add react-native-mixins
```

## 🚀 Quick Start

```tsx
import {
  sizeScale,
  verticalScale,
  fontScale,
  platformMixin,
} from 'react-native-mixins';

const styles = StyleSheet.create({
  container: {
    padding: sizeScale(16),
    gap: verticalScale(8),
  },
  text: {
    fontSize: fontScale(18),
    ...platformMixin({
      ios: { fontFamily: 'Arial' },
      android: { fontFamily: 'Roboto' },
    }),
  },
});
```

## ⚙️ API Reference

### Scaling Utilities

#### `sizeScale(size: number): number`

Scales a size value based on screen width. Uses a guideline base width of 375px.

```tsx
const padding = sizeScale(16); // Responsive padding
const margin = sizeScale(8); // Responsive margin
```

#### `verticalScale(size: number): number`

Scales a size value based on screen height. Uses a guideline base height of 812px.

```tsx
const gap = verticalScale(16); // Responsive vertical spacing
const height = verticalScale(100); // Responsive height
```

#### `fontScale(size: number): number`

Scales font sizes with pixel-perfect rounding for crisp text rendering.

```tsx
const fontSize = fontScale(18); // Responsive font size
```

### Platform Mixin

#### `platformMixin(styles: PlatformStyles): object`

Applies platform-specific styles with fallback support.

```tsx
const styles = StyleSheet.create({
  button: {
    ...platformMixin({
      ios: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
      },
      android: {
        backgroundColor: '#6200EE',
        elevation: 2,
      },
      default: {
        backgroundColor: '#000000',
      },
    }),
  },
});
```

### Device Detection

#### `isSmallDevice(): boolean`

Returns `true` if the device width is less than 360px.

```tsx
if (isSmallDevice()) {
  // Apply compact layout
}
```

#### `isTablet(): boolean`

Returns `true` if the device width is 768px or greater.

```tsx
if (isTablet()) {
  // Apply tablet-specific layout
}
```

## 📖 Guidelines

### Scaling Guidelines

- **Base Width**: 375px (iPhone X/11/12/13/14 width)
- **Base Height**: 812px (iPhone X/11/12/13/14 height)
- **Small Device**: < 360px width
- **Tablet**: ≥ 768px width

### Best Practices

1. **Use `sizeScale` for horizontal spacing**: padding, margin, width
2. **Use `verticalScale` for vertical spacing**: gap, height, line-height
3. **Use `fontScale` for text sizes**: Ensures crisp rendering
4. **Combine with device detection**: Create adaptive layouts
5. **Platform-specific styling**: Use `platformMixin` for native feel

## ✍️ Contributing

Contributions are welcome! 🚀

If you'd like to:

- Fix a bug
- Suggest a new animated component
- Improve performance or API design

Please open an [issue](https://github.com/blaiti/react-native-mixins/issues) or submit a [pull request](https://github.com/blaiti/react-native-mixins/pulls).

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## 📄 License

MIT © [Skander Blaiti](https://github.com/blaiti)

## 💬 Let's Connect!

- [Portfolio](https://www.blaiti.com)
- [Twitter](https://twitter.com/SkanderBlaiti)
- [LinkedIn](https://www.linkedin.com/in/skanderblaiti)
