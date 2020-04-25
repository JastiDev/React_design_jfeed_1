const path = require('path');
const { override, useEslintRc, addWebpackResolve, useBabelRc, setWebpackOptimizationSplitChunks } = require('customize-cra');

module.exports = override(
  useEslintRc(),
  useBabelRc(),
  addWebpackResolve({
    alias: {
      '@': path.resolve('src/')
    }
  }),
  setWebpackOptimizationSplitChunks({
    "chunks": "all",
    "name": false,
    maxAsyncRequests: 10,
    maxInitialRequests: 5,
  }),
);
