import { Platform } from 'react-native';

type PlatformStyles = {
  ios?: object;
  android?: object;
  default?: object;
};

export const platformMixin = ({
  ios,
  android,
  default: def,
}: PlatformStyles): object => {
  if (Platform.OS === 'ios' && ios) return ios;
  if (Platform.OS === 'android' && android) return android;
  return def || {};
};
