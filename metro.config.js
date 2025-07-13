const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    extraNodeModules: {
      net: require.resolve('react-native-tcp'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      process: require.resolve('process/browser'),
      util: require.resolve('util/'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      tls: require.resolve('react-native-tls'),
      zlib: require.resolve('browserify-zlib'),  // Replaced react-native-zlib
    },
  },
};