// const { getDefaultConfig } = require('expo/metro-config');

// const defaultConfig = getDefaultConfig(__dirname);

// module.exports = {
//   ...defaultConfig,
//   resolver: {
//     ...defaultConfig.resolver,
//     extraNodeModules: {
//       net: require.resolve('react-native-tcp'),
//       crypto: require.resolve('crypto-browserify'),
//       stream: require.resolve('stream-browserify'),
//       buffer: require.resolve('buffer/'),
//       process: require.resolve('process/browser'),
//       util: require.resolve('util/'),
//       http: require.resolve('stream-http'),
//       https: require.resolve('https-browserify'),
//       tls: require.resolve('react-native-tls'),
//       zlib: require.resolve('browserify-zlib'),  // Replaced react-native-zlib
//     },
//   },
// };


// const { getDefaultConfig } = require('expo/metro-config');
// const path = require('path');
// const defaultConfig = getDefaultConfig(__dirname);

// module.exports = {
//   ...defaultConfig,
//   projectRoot: path.resolve(__dirname),
//   watchFolders: [
//     path.resolve(__dirname),
//     path.resolve(__dirname, 'node_modules')
//   ],
//   resolver: {
//     ...defaultConfig.resolver,
//     extraNodeModules: {
//       'buffer': require.resolve('buffer/'),
//       'memoize-one': require.resolve('memoize-one'),
//       'crypto': require.resolve('crypto-browserify'),
//       'stream': require.resolve('stream-browserify'),
//       'process': require.resolve('process/browser')
//     },
//     sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs'],
//     blockList: [],
//     disableHierarchicalLookup: true
//   },
//   transformer: {
//     ...defaultConfig.transformer,
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true
//       }
//     })
//   },
//   cacheStores: [],
//   resetCache: true
// };


// const { getDefaultConfig } = require('expo/metro-config');
// const path = require('path');

// // Get default config
// const defaultConfig = getDefaultConfig(__dirname);

// // Export the custom metro configuration
// module.exports = {
//   ...defaultConfig,
//   projectRoot: path.resolve(__dirname),
//   watchFolders: [
//     path.resolve(__dirname), // Root folder
//     path.resolve(__dirname, 'node_modules') // Node modules folder
//   ],
//   resolver: {
//     ...defaultConfig.resolver,
//     extraNodeModules: {
//       'buffer': require.resolve('buffer/'),
//       'memoize-one': require.resolve('memoize-one'),
//       'crypto': require.resolve('crypto-browserify'),
//       'stream': require.resolve('stream-browserify'),
//       'process': require.resolve('process/browser')
//     },
//     sourceExts: [
//       ...defaultConfig.resolver.sourceExts,
//       'cjs' // Support for .cjs files
//     ],
//     blockList: [], // No blocked folders
//     disableHierarchicalLookup: true // Improve resolution speed
//   },
//   transformer: {
//     ...defaultConfig.transformer,
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false, // Ensure compatibility
//         inlineRequires: true // Improve performance
//       }
//     })
//   },
//   cacheStores: [], // Clear caches
//   resetCache: true // Enable reset cache for development
// };






// const { getDefaultConfig } = require('expo/metro-config');
// const path = require('path');

// const defaultConfig = getDefaultConfig(__dirname);

// module.exports = {
//   ...defaultConfig,
  
//   // Add Metro resolver configuration
//   resolver: {
//     ...defaultConfig.resolver,
    
//     // Node core polyfills
//     extraNodeModules: {
//       ...defaultConfig.resolver.extraNodeModules,
//       net: require.resolve('react-native-tcp'),
//       crypto: require.resolve('crypto-browserify'),
//       stream: require.resolve('stream-browserify'),
//       buffer: require.resolve('buffer/'),
//       process: require.resolve('process/browser'),
//       util: require.resolve('util/'),
//       http: require.resolve('stream-http'),
//       https: require.resolve('https-browserify'),
//       tls: require.resolve('react-native-tls'),
//       zlib: require.resolve('browserify-zlib'),
//     },
    
//     // Add asset extensions
//     assetExts: [...defaultConfig.resolver.assetExts, 'pem', 'crt', 'key'],
    
//     // Add source extensions
//     sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs', 'cjs'],
//   },
  
//   // Metro transformer configuration
//   transformer: {
//     ...defaultConfig.transformer,
//     babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     minifierPath: require.resolve('metro-minify-terser'),
//     minifierConfig: {
//       keep_classnames: true,
//       keep_fnames: true,
//       mangle: {
//         keep_classnames: true,
//         keep_fnames: true,
//       },
//     },
//   },
  
//   // Watch folders configuration
//   watchFolders: [
//     path.resolve(__dirname, '../../node_modules'),
//     path.resolve(__dirname, './src'),
//   ],
  
//   // Reset cache when Metro starts
//   resetCache: true,
// };







// const { getDefaultConfig } = require('@react-native/metro-config');
// const { mergeConfig } = require('metro-config');

// const defaultConfig = getDefaultConfig(__dirname);

// const config = {
//   transformer: {
//     babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     minifierPath: require.resolve('metro-minify-terser'),
//     minifierConfig: {
//       keep_classnames: true,
//       keep_fnames: true,
//       mangle: {
//         keep_classnames: true,
//         keep_fnames: true,
//       },
//     },
//   },
//   resolver: {
//     extraNodeModules: {
//       net: require.resolve('react-native-tcp'),
//       crypto: require.resolve('crypto-browserify'),
//       stream: require.resolve('stream-browserify'),
//       buffer: require.resolve('buffer/'),
//       process: require.resolve('process/browser'),
//       util: require.resolve('util/'),
//       http: require.resolve('stream-http'),
//       https: require.resolve('https-browserify'),
//       tls: require.resolve('react-native-tls'),
//       zlib: require.resolve('browserify-zlib'),
//     },
//     assetExts: [...defaultConfig.resolver.assetExts, 'pem', 'crt', 'key'],
//     sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs', 'cjs'],
//   },
//   maxWorkers: 2,
//   resetCache: true
// };

// module.exports = mergeConfig(defaultConfig, config);



// const { getDefaultConfig } = require('expo/metro-config');
// const { mergeConfig } = require('metro-config');
// const path = require('path');

// const defaultConfig = getDefaultConfig(__dirname);

// // Corrected module resolutions
// const extraNodeModules = {
//   ...defaultConfig.resolver.extraNodeModules,
//   // Update Supabase resolution:
//   '@supabase/postgrest-js': require.resolve('@supabase/postgrest-js'),
//   // Other resolutions remain the same
//   '@radix-ui/react-slot': require.resolve('@radix-ui/react-slot'),
//   'merge-options': require.resolve('merge-options'),
//   'ws': require.resolve('ws'),
//   // Your existing polyfills...
//   net: require.resolve('react-native-tcp'),
//   crypto: require.resolve('crypto-browserify'),
//   stream: require.resolve('stream-browserify'),
//   buffer: require.resolve('buffer/'),
//   process: require.resolve('process/browser'),
//   util: require.resolve('util/'),
//   http: require.resolve('stream-http'),
//   https: require.resolve('https-browserify'),
//   tls: require.resolve('react-native-tls'),
//   zlib: require.resolve('browserify-zlib')
// };

// const config = {
//   transformer: {
//     ...defaultConfig.transformer,
//     babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     unstable_allowRequireContext: true,
//   },
//   resolver: {
//     ...defaultConfig.resolver,
//     extraNodeModules,
//     resolverMainFields: ['react-native', 'browser', 'main'],
//     assetExts: [...defaultConfig.resolver.assetExts, 'pem', 'crt', 'key'],
//     sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs', 'cjs'],
//   },
//   maxWorkers: 2,
//   resetCache: true
// };

// module.exports = mergeConfig(defaultConfig, config);


// const { getDefaultConfig } = require('expo/metro-config');
// const { mergeConfig } = require('metro-config');
// const path = require('path');

// const defaultConfig = getDefaultConfig(__dirname);

// // ✅ Safe polyfills for browser compatibility
// const extraNodeModules = {
//   '@supabase/postgrest-js': require.resolve('@supabase/postgrest-js'),
//   '@radix-ui/react-slot': require.resolve('@radix-ui/react-slot'),
//   'merge-options': require.resolve('merge-options'),

//   // ✅ Only keep browser-safe polyfills
//   stream: require.resolve('stream-browserify'),
//   buffer: require.resolve('buffer/'),
//   crypto: require.resolve('crypto-browserify'),
//   process: require.resolve('process/browser'),
//   util: require.resolve('util/'),
//   path: require.resolve('path-browserify'),
// };

// const config = {
//   transformer: {
//     ...defaultConfig.transformer,
//     babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     unstable_allowRequireContext: true,
//   },
//   resolver: {
//     ...defaultConfig.resolver,
//     extraNodeModules,
//     resolverMainFields: ['react-native', 'browser', 'main'],
//     assetExts: [...defaultConfig.resolver.assetExts, 'pem', 'crt', 'key'],
//     sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs', 'cjs'],
//   },
//   maxWorkers: 2,
//   resetCache: true,
// };

// module.exports = mergeConfig(defaultConfig, config);



// const { getDefaultConfig } = require('expo/metro-config');
// const { mergeConfig } = require('metro-config');
// const path = require('path');

// const defaultConfig = getDefaultConfig(__dirname);

// // ✅ Safe polyfills for browser compatibility
// const extraNodeModules = {
//   '@supabase/postgrest-js': require.resolve('@supabase/postgrest-js'),
//   '@radix-ui/react-slot': require.resolve('@radix-ui/react-slot'),
//   'merge-options': require.resolve('merge-options'),

//   stream: require.resolve('stream-browserify'),
//   buffer: require.resolve('buffer/'),
//   crypto: require.resolve('crypto-browserify'),
//   process: require.resolve('process/browser'),
//   util: require.resolve('util/'),
//   path: require.resolve('path-browserify'),
// };

// const config = {
//   transformer: {
//     ...defaultConfig.transformer,
//     babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     unstable_allowRequireContext: true,
//   },
//   resolver: {
//     ...defaultConfig.resolver,
//     extraNodeModules,
//     resolverMainFields: ['react-native', 'browser', 'main'],
//     assetExts: [
//       ...defaultConfig.resolver.assetExts.filter(ext => ext !== 'xlsx'),
//       'pem',
//       'crt',
//       'key',
//       'xlsx', // ✅ Add xlsx here
//     ],
//     sourceExts: [
//       ...defaultConfig.resolver.sourceExts,
//       'mjs',
//       'cjs',
//     ],
//   },
//   maxWorkers: 2,
//   resetCache: true,
// };

// module.exports = mergeConfig(defaultConfig, config);


const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

const extraNodeModules = {
  ...defaultConfig.resolver.extraNodeModules,
  '@supabase/postgrest-js': require.resolve('@supabase/postgrest-js'),
  '@radix-ui/react-slot': require.resolve('@radix-ui/react-slot'),
  'merge-options': require.resolve('merge-options'),
  stream: require.resolve('stream-browserify'),
  buffer: require.resolve('buffer/'),
  crypto: require.resolve('crypto-browserify'),
  process: require.resolve('process/browser'),
  util: require.resolve('util/'),
  path: require.resolve('path-browserify'),
};

const config = {
  transformer: {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    unstable_allowRequireContext: true,
  },
  resolver: {
    ...defaultConfig.resolver,
    extraNodeModules,
    resolverMainFields: ['react-native', 'browser', 'main'],
    assetExts: [
      ...defaultConfig.resolver.assetExts.filter(ext => ext !== 'xlsx'),
      'pem',
      'crt',
      'key',
      'xlsx', // ✅ Needed for Excel templates
    ],
    sourceExts: [
      ...defaultConfig.resolver.sourceExts,
      'mjs',
      'cjs',
    ],
  },
  maxWorkers: 2,
  resetCache: true,
};

module.exports = mergeConfig(defaultConfig, config);

