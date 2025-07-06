import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const isSmallDevice = () => width < 360;

export const isTablet = () => width >= 768;
