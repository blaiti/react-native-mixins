import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import {
  sizeScale,
  verticalScale,
  fontScale,
  platformMixin,
  isSmallDevice,
  isTablet,
} from 'react-native-mixins';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === 'ios' ? '#F2F2F7' : '#FFFFFF'}
      />

      <View style={styles.content}>
        <Text style={styles.title}>React Native Mixins</Text>

        {/* Scaling Examples */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scaling Utilities</Text>

          <View style={styles.example}>
            <Text style={styles.exampleTitle}>
              sizeScale(16) = {sizeScale(16).toFixed(1)}px
            </Text>
            <View
              style={[
                styles.box,
                { width: sizeScale(16), height: sizeScale(16) },
              ]}
            />
          </View>

          <View style={styles.example}>
            <Text style={styles.exampleTitle}>
              verticalScale(20) = {verticalScale(20).toFixed(1)}px
            </Text>
            <View
              style={[styles.box, { width: 50, height: verticalScale(20) }]}
            />
          </View>

          <View style={styles.example}>
            <Text style={styles.exampleTitle}>
              fontScale(18) = {fontScale(18).toFixed(1)}px
            </Text>
            <Text style={[styles.demoText, { fontSize: fontScale(18) }]}>
              Sample Text
            </Text>
          </View>
        </View>

        {/* Platform Mixin Example */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Platform Mixin</Text>

          <View
            style={[
              styles.platformBox,
              platformMixin({
                ios: { backgroundColor: '#007AFF' },
                android: { backgroundColor: '#6200EE' },
              }),
            ]}
          >
            <Text style={styles.platformText}>iOS: Blue, Android: Purple</Text>
          </View>
        </View>

        {/* Device Detection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Device Detection</Text>

          <View style={styles.deviceInfo}>
            <Text style={styles.deviceText}>
              isSmallDevice(): {isSmallDevice() ? 'Yes' : 'No'}
            </Text>
            <Text style={styles.deviceText}>
              isTablet(): {isTablet() ? 'Yes' : 'No'}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? '#F2F2F7' : '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: sizeScale(16),
  },
  title: {
    fontSize: fontScale(24),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: verticalScale(32),
  },
  section: {
    marginBottom: verticalScale(32),
  },
  sectionTitle: {
    fontSize: fontScale(18),
    fontWeight: '600',
    color: '#000000',
    marginBottom: verticalScale(12),
  },
  example: {
    marginBottom: verticalScale(16),
  },
  exampleTitle: {
    fontSize: fontScale(14),
    color: '#666666',
    marginBottom: verticalScale(4),
  },
  box: {
    backgroundColor: '#007AFF',
    borderRadius: sizeScale(4),
  },
  demoText: {
    color: '#000000',
    fontWeight: '500',
  },
  platformBox: {
    padding: sizeScale(16),
    borderRadius: sizeScale(8),
    alignItems: 'center',
  },
  platformText: {
    fontSize: fontScale(14),
    color: '#FFFFFF',
    fontWeight: '600',
  },
  deviceInfo: {
    backgroundColor: '#FFFFFF',
    padding: sizeScale(16),
    borderRadius: sizeScale(8),
    ...platformMixin({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  deviceText: {
    fontSize: fontScale(14),
    color: '#000000',
    marginBottom: verticalScale(4),
  },
  button: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: sizeScale(16),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: fontScale(14),
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default App;
