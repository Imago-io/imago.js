var webpack = require('webpack'),
    path = require('path'),
    yargs = require('yargs');

var libraryName = 'imago',
    plugins = [],
    outputFile;

if (yargs.argv.p) {
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

var config = {
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts?$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
      },
      { test: /\.ts?$/, loader: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.ts']
  },
  plugins,

  // Individual Plugin Options
  // tslint: {
  //   emitErrors: true,
  //   failOnHint: true
  // }
};

module.exports = config;
