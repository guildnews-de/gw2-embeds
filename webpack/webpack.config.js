const { resolve } = require('path');
const plugins = require('./plugins');
const loaders = require('./loaders');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
  target: 'web',
  entry: './src/index.ts',
  output: {
    filename: 'gw2-embeds.js',
    path: resolve(__dirname, '../dist'),
    chunkFilename: 'js/[id].[contenthash].js',
    assetModuleFilename: 'assets/[contenthash][ext]',
    hashDigestLength: 16,
    clean: true,
  },
  plugins: plugins,
  module: {
    rules: loaders,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
